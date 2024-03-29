import InputWithIcon from "@components/common/InputWithIcon";
import styled from "styled-components";

export const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <H1>Bienvenue Anna</H1>
      <Right>
        <SearchBar>
          <InputWithIcon
            icon="ri-search-line"
            placeholder="Search..."
            type="email"
          />
        </SearchBar>
        <TopBarNotif>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5"
              stroke="#64748B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
              stroke="#64748B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TopBarNotif>

        <UserCard>
          <img src="https://randomuser.me/api/portraits/women/14.jpg" />
          <div className="idAndBtn">
            <div className="userId">
              <p className="name">Anna L.</p>
              <p>RH</p>
            </div>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </UserCard>
      </Right>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors.light};
  height: 88px;
  width: calc(100% - 298px);
  user-select: none;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 250px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 24px;
`;

const H1 = styled.h1`
  font-size: 24px;
`;

const SearchBar = styled.div`
  font-size: 24px;
  border-radius: 24px;
`;

const TopBarNotif = styled.div``;

const UserCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .idAndBtn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    .userId {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .name {
        font-weight: 600;
      }
    }
  }
`;
