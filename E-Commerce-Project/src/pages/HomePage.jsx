import { toast } from "react-toastify";

export default function HomePage() {
  return (
    <button
      onClick={() => toast.success("Toast çalışıyor ✅")}
      className="p-4 bg-green-500 text-white"
    >
      Toast Test
    </button>
  );
}
