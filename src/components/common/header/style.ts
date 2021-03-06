import styled from "styled-components";
import media from "src/styles/media";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 116px;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${media.small} {
  }
`;

export const Menu = styled.div``;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  margin-left: 10px;
  margin-top: 5px;
`;

export const MenuContainer = styled.ul`
  display: flex;
  margin-left: 20px;
  width: 144px;
  margin-top: 8px;
  justify-content: space-around;
  ${media.small} {
    a:nth-child(-n + 3) {
      display: none;
    }
  }
`;

export const BtnWrap = styled.div`
  width: 120px;
`;
export const DownBtn = styled.div`
  display: none;
  width: 120px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.pointRed};
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  ${media.small} {
    display: block;
  }
`;
