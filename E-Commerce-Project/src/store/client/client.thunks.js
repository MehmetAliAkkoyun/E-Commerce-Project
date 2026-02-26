import { setRoles } from "./client.actions";


export const fetchRolesIfNeeded = () => async (dispatch, getState, extra) => {
  const { roles } = getState().client;

  if (Array.isArray(roles) && roles.length > 0) return;

  try {


    const res = await fetch("https://workintech-fe-ecommerce.onrender.com/roles");
    if (!res.ok) throw new Error("Roles fetch failed");
    const data = await res.json();

    dispatch(setRoles(data));
  } catch (err) {
    console.error(err);
  }
};