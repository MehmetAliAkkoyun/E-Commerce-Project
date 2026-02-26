import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { fetchRoles, signup } from "../services/auth";

// ✅ Validations
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
// TR telefonu: 0 ile veya +90 ile başlayabilir, toplam mantıklı uzunluk
const trPhoneRegex = /^(?:\+90|0)?5\d{9}$/;
// Tax: T + 10 hane (istersen 11 yap: {11})
const taxRegex = /^T\d{10}$/;
// TR IBAN: TR + 24 rakam = 26 karakter
const ibanRegex = /^TR\d{24}$/;

export default function SignupPage() {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
      role_id: "",
      store_name: "",
      store_phone: "",
      store_tax_no: "",
      store_bank_account: "",
    },
  });

  const selectedRoleId = watch("role_id");
  const password = watch("password");

  const selectedRole = useMemo(() => {
    return roles.find((r) => String(r.id) === String(selectedRoleId));
  }, [roles, selectedRoleId]);

  const isStore = (selectedRole?.code || selectedRole?.name || "")
    .toString()
    .toLowerCase()
    .includes("store");

  // ✅ Roles yükle + default Customer seç
  useEffect(() => {
    let mounted = true;
    fetchRoles()
      .then((res) => {
        if (!mounted) return;
        const list = res.data || [];
        setRoles(list);

        const customer =
          list.find((r) =>
            (r.code || r.name || "").toString().toLowerCase().includes("customer")
          ) || list[0];

        if (customer) setValue("role_id", String(customer.id));
      })
      .catch(() => setServerError("Roles could not be loaded."));
    return () => {
      mounted = false;
    };
  }, [setValue]);

  const onSubmit = async (data) => {
    setServerError("");
    setLoading(true);

    try {
      // ✅ Payload format (task’a göre)
      const payload = {
        name: data.name.trim(),
        email: data.email.trim(),
        password: data.password,
        role_id: Number(data.role_id),
      };

      if (isStore) {
        payload.store = {
          name: data.store_name.trim(),
          phone: data.store_phone.trim(),
          tax_no: data.store_tax_no.trim(),
          bank_account: data.store_bank_account.trim(),
        };
      }

      await signup(payload);

      // ✅ başarı: önceki sayfaya dön + uyarı
      // (Toast kullanıyorsan burada toast.warning basabilirsin)
      alert("You need to click link in email to activate your account!");
      history.goBack();
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Signup failed. Please check the form.";
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white font-[Montserrat]">
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-[#252B42]">Sign Up</h1>
        <p className="mt-2 text-sm text-[#737373]">
          Create a new user account.
        </p>

        {serverError && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6 max-w-xl">
          {/* NAME */}
          <div>
            <label className="block text-sm font-bold text-[#252B42]">Name</label>
            <input
              className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
              placeholder="At least 3 characters"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Min 3 characters" },
              })}
            />
            {errors.name && (
              <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-bold text-[#252B42]">Email</label>
            <input
              className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
              placeholder="example@mail.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: emailRegex, message: "Invalid email" },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-bold text-[#252B42]">Password</label>
            <input
              type="password"
              className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
              placeholder="Min 8, lower/upper/number/special"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: passwordRegex,
                  message:
                    "Min 8, include lower+upper+number+special character",
                },
              })}
            />
            {errors.password && (
              <p className="mt-2 text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* PASSWORD CONFIRM */}
          <div>
            <label className="block text-sm font-bold text-[#252B42]">
              Password Validation
            </label>
            <input
              type="password"
              className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
              placeholder="Repeat password"
              {...register("password2", {
                required: "Password confirmation is required",
                validate: (v) => v === password || "Passwords do not match",
              })}
            />
            {errors.password2 && (
              <p className="mt-2 text-xs text-red-600">{errors.password2.message}</p>
            )}
          </div>

          {/* ROLE */}
          <div>
            <label className="block text-sm font-bold text-[#252B42]">Role</label>
            <select
              className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 bg-white outline-none"
              {...register("role_id", { required: "Role is required" })}
            >
              {roles.map((r) => (
                <option key={r.id} value={String(r.id)}>
                  {r.name || r.code || `Role ${r.id}`}
                </option>
              ))}
            </select>
            {errors.role_id && (
              <p className="mt-2 text-xs text-red-600">{errors.role_id.message}</p>
            )}
          </div>

          {/* STORE FIELDS (only if Store selected) */}
          {isStore && (
            <div className="rounded-md border border-[#E6E6E6] p-4 space-y-5">
              <p className="text-sm font-bold text-[#252B42]">Store Info</p>

              <div>
                <label className="block text-sm font-bold text-[#252B42]">
                  Store Name
                </label>
                <input
                  className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
                  {...register("store_name", {
                    required: "Store name is required",
                    minLength: { value: 3, message: "Min 3 characters" },
                  })}
                />
                {errors.store_name && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.store_name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-[#252B42]">
                  Store Phone (TR)
                </label>
                <input
                  className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
                  placeholder="05xxxxxxxxx or +905xxxxxxxxx"
                  {...register("store_phone", {
                    required: "Store phone is required",
                    pattern: { value: trPhoneRegex, message: "Invalid TR phone" },
                  })}
                />
                {errors.store_phone && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.store_phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-[#252B42]">
                  Store Tax ID
                </label>
                <input
                  className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
                  placeholder="TXXXXXXXXXX"
                  {...register("store_tax_no", {
                    required: "Tax ID is required",
                    pattern: { value: taxRegex, message: "Format: T + 10 digits" },
                  })}
                />
                {errors.store_tax_no && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.store_tax_no.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-[#252B42]">
                  Store Bank Account (IBAN)
                </label>
                <input
                  className="mt-2 w-full h-11 rounded-md border border-[#E6E6E6] px-4 outline-none"
                  placeholder="TRxxxxxxxxxxxxxxxxxxxxxxxx"
                  {...register("store_bank_account", {
                    required: "IBAN is required",
                    pattern: { value: ibanRegex, message: "Invalid TR IBAN" },
                  })}
                />
                {errors.store_bank_account && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.store_bank_account.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading || isSubmitting}
            className={`h-11 px-6 rounded-md bg-[#23A6F0] text-white text-sm font-bold
              ${(loading || isSubmitting) ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {(loading || isSubmitting) ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}