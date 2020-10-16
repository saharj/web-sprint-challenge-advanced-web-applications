import React from "react";
import { render, screen, wait } from "@testing-library/react";

import BubblePage from "./BubblePage";
import { fetchColorsApi } from "../api/fetchColors";
import { axiosWithAuth } from "../utils/axiosWithAuth";

jest.mock("../api/fetchColors");

// beforeEach(() => {
//   fetchColorsApi.mockClear();
// });

test("Fetches data and renders the bubbles", async () => {
  const colors = [
    {
      code: { hex: "#7fffd4" },
      color: "aquamarine",
      id: 4,
    },
    {
      code: { hex: "#dd99ba" },
      color: "softpink",
      id: 6,
    },
  ];

  const token =
    "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";
  localStorage.setItem("token", token);

  fetchColorsApi.mockResolvedValue(colors);

  const { getByText } = render(<BubblePage />);

  await wait();

  expect(getByText(/softpink/i)).toBeTruthy();
});
