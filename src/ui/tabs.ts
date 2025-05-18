import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  gap: 4px;
  padding: 0 1rem;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ isActive }) =>
    isActive
      ? "var(--primary-brand-color-main)"
      : "var(--primary-light-color-500)"};
  margin-bottom: -2px;
  transition: all 0.2s ease-in-out;
`;
