import React from "react";
import star from "../../assets/star_svg.svg";
import take_away from "../../assets/homePage_img.png";
import Button from "../Button/Button.jsx";
import styled from "styled-components";

const Wrapper = styled.main`
  background-image: url("/images/homePage_font.png");
  background-size: cover;
  padding: 100px 120px;
  display: flex;
  gap: 32px;
  align-items: center;
`;

const InfoBlock = styled.div``;

const Title = styled.div`
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1.8px;
  margin-bottom: 26px;
`;

const Highlight = styled.a`
  color: #35b8be;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32px;
  color: #546285;
  max-width: 540px;
  margin-bottom: 52px;
`;

const ButtonWrapper = styled.div`
margin-bottom: 40px;`

const TrustpilotContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  margin-bottom: 10px;
`;

const TrustpilotText = styled.div`
  color: #000000;
`;

const Rating = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #08090a;
`;

const TakeAwayImg = styled.img`
  max-width: 100%;
`;

const HomeMain = () => {
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
                <Button type="btn__primary btn--large ">Place an Order</Button>
                </ButtonWrapper>
                <TrustpilotContainer>
                    <img src={star} alt="star" className="star" />
                    <TrustpilotText>Trustpilot</TrustpilotText>
                </TrustpilotContainer>

                <Rating>
                    <Highlight href="#">4.8 out of 5</Highlight> based on 2000+ reviews
                </Rating>
            </InfoBlock>

            <TakeAwayImg src={take_away} alt="Take Away" />
        </Wrapper>
    );
};

export default HomeMain;
