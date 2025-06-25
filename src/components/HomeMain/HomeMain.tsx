import React from "react";
import take_away from "../../assets/homePage_img.png";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import styled from "styled-components";

const Wrapper = styled.main`
  background-image: url("/images/homePage_font.png");
  background-size: cover;
  padding: 100px 120px;
  display: flex;
  gap: 32px;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const InfoBlock = styled.div``;

const Title = styled.div`
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1.8px;
  margin-bottom: 26px;

  span {
    color: var(--accent-color);
  }
`;

const Highlight = styled.a`
  color: var(--accent-color);
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32px;
  color: var(--subtitle-color, #546285);
  max-width: 540px;
  margin-bottom: 52px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 40px;
`;

const TakeAwayImg = styled.img`
  max-width: 100%;
`;

const HomeMain: React.FC = () => {
    return (
        <Wrapper>
            <InfoBlock>
                <Title>
                    Beautiful food & <br />
                    <span>
            takeaway, <Highlight href="#">delivered</Highlight>
          </span>{" "}
                    <br />
                    to your door.
                </Title>

                <SubTitle>
                    Lorem Ipsum is simply dummy text of the printing and<br /> typesetting
                    industry. Lorem Ipsum has been the industry's <br /> standard dummy
                    text ever since the 1500.
                </SubTitle>
                <ButtonWrapper>
                    <Button variant="btn__primary btn--large">Place an Order</Button>
                </ButtonWrapper>
                <Rating />
            </InfoBlock>

            <TakeAwayImg src={take_away} alt="Take Away" />
        </Wrapper>
    );
};

export default HomeMain;
