/* eslint-disable @typescript-eslint/no-explicit-any */
function remove<T, K extends keyof T>(data: T, keys: K[]) {
  const copy = { ...data };
  keys.forEach((key) => delete copy[key]);
  return copy;
}

function pick<T extends Record<string, any>, K extends keyof T>(
  data: T,
  keys: K[],
) {
  const copy = { ...data };
  Object.keys(copy).forEach((key) => {
    if (!keys.includes(key as K)) {
      delete copy[key];
    }
  });
  return copy;
}

export function RemoveValues<T, K extends keyof T>(data: T | T[], keys: K[]) {
  if (Array.isArray(data)) {
    return data.map((item) => remove(item, keys));
  }
  return remove(data, keys);
}

export function PickValues<T extends Record<string, any>, K extends keyof T>(
  data: T | T[],
  keys: K[],
) {
  if (Array.isArray(data)) {
    return data.map((item) => pick(item, keys));
  }
  return pick(data, keys);
}
