import React from 'react';

// styled components
import styled from 'styled-components/native';
import { colors } from '../colors';
const { white } = colors;
import SmallText from '../Texts/SmallText';


const StyledPressable = styled.Pressable`
    padding-vertical: 5px;
    align-self: center;
`;

const PressableText = (props) => {
    return (
    <StyledPressable onpress={ props.onPress } { ...props }>
        <SmallText style={{ color: white }}>{ props.children }</SmallText>
    </StyledPressable>
    );
};

export default PressableText;