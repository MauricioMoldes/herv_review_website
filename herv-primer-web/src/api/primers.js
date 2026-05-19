import api from "./client";

export const getPrimers = async (params) => {
  const res = await api.get("/primers", { params });
  return res.data;
};

export const getPrimersForward = async (seq) => {
  const res = await api.get("/primers_forward", {
    params: { forward_seq: seq },
  });
  return res.data;
};

export const getPrimersReverse = async (seq) => {
  const res = await api.get("/primers_reverse", {
    params: { reverse_seq: seq },
  });
  return res.data;
};
