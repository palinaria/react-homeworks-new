import React from "react";
import styled from "styled-components";
import star from "/src/assets/star_svg.svg";

const TrustpilotContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  margin-bottom: 10px;
`;

const TrustpilotText = styled.div`
  color: var(--text-color);
`;

const RatingText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color);
`;

const Highlight = styled.a`
  color: var(--accent-color);
`;

const Rating: React.FC = () => (
    <>
        <TrustpilotContainer>
            <img src={star} alt="star" className="star" />
            <TrustpilotText>Trustpilot</TrustpilotText>
        </TrustpilotContainer>

        <RatingText>
            <Highlight href="#">4.8 out of 5</Highlight> based on 2000+ reviews
        </RatingText>
    </>
);

export default Rating;
