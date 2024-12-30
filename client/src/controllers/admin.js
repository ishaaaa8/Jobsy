const base = "http://localhost:5000";

export const register_admin = async (obj) => {
  const res = await fetch(`${base}/api/admin/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const login_admin = async (obj) => {
  const res = await fetch(`${base}/api/admin/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const auth_admin = async (obj) => {
  const res = await fetch(`${base}/api/admin/auth`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};
export const get_admin_det_by_id = async (obj) => {
  const res = await fetch(`${base}/api/admin/admindets`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_forms = async (obj) => {
  const res = await fetch(`${base}/api/admin/forms`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

// export const action_by_admin = async (obj) => {
//   const res = await fetch(`${base}/api/admin/action_by_admin`, {
//     method: "PUT",
//     body: JSON.stringify(obj),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const ans = await res.json();
//   return ans;
// };
export const action_by_admin = async (obj) => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/action_by_admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in action_by_admin:", error);
      throw error;
    }
  };
  