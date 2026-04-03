import { ProductsResponse } from "@/types";
import { ProductResponse } from "@/types/product";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  const data = await res.json();
  return data.data;
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    const data: ProductResponse = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getProducts(limit: number = 20) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
  const data: ProductsResponse = await res.json();
  return data.data;
}

export async function signUp(data: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
}

export async function signIn(data: { email: string; password: string }) {
  const res = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
}

export const addToWishlist = async (productId: string, token: string) => {
  const response = await fetch(`${BASE_URL}/wishlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ productId }),
  });
  return response.json();
};

export const removeFromWishlist = async (productId: string, token: string) => {
  const response = await fetch(`${BASE_URL}/wishlist/${productId}`, {
    method: "DELETE",
    headers: {
      token: token,
    },
  });
  return response.json();
};

export const getWishlist = async (token: string) => {
  const response = await fetch(`${BASE_URL}/wishlist`, {
    method: "GET",
    headers: {
      token: token,
    },
  });
  return response.json();
};

export const addToCart = async (productId: string, token: string) => {
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ productId }),
  });

  const data = await res.json();
  return data;
};

export async function getCart(token: string) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    headers: {
      token,
    },
  });
  const data = await res.json();
  return data;
}
export async function getCartItems(token: string) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    headers: { token },
  });
  return res.json();
}

export async function getWishlistProducts(token: string) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: { token },
  });
  const data = await res.json();
  return data;
}

export async function updateCartItem(
  itemId: string,
  count: number,
  token: string,
) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${itemId}`,
    {
      method: "PUT",
      headers: { token, "Content-Type": "application/json" },
      body: JSON.stringify({ count }),
    },
  );
  return res.json();
}

export async function removeCartItem(itemId: string, token: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${itemId}`,
    {
      method: "DELETE",
      headers: { token },
    },
  );
  return res.json();
}

export async function clearCart(token: string) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "DELETE",
    headers: { token },
  });
  return res.json();
}

export async function applyCoupon(couponName: string, token: string) {
  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v2/cart/applyCoupon",
    {
      method: "PUT",
      headers: { token, "Content-Type": "application/json" },
      body: JSON.stringify({ couponName }),
    },
  );
  return res.json();
}

export async function createCashOrder(
  cartId: string,
  shippingAddress: { city: string; details: string; phone: string },
  token: string,
) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      method: "POST",
      headers: { token, "Content-Type": "application/json" },
      body: JSON.stringify({ shippingAddress }),
    },
  );
  return res.json();
}

export async function createOnlineOrder(
  cartId: string,
  shippingAddress: { city: string; details: string; phone: string },
  token: string,
) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {
      method: "POST",
      headers: { token, "Content-Type": "application/json" },
      body: JSON.stringify({ shippingAddress }),
    },
  );
  return res.json();
}
export async function getBrands() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
  const data = await res.json();
  return data.data;
}
