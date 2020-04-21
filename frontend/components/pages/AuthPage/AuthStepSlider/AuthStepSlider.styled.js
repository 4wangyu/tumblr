import styled from 'styled-components';
import { flexCenterCol } from 'styled/helpers';

export const AuthStepSliderContainer = styled.div`
  /* overflow-x: hidden; */
  position: relative;
  width: inherit;
`;

export const StepForm = styled.form`
  ${flexCenterCol}
  font-size: 1.5rem;
  position: absolute;
  width: 100%;
  z-index: 1;

  > * {
    margin: .6rem 0;
  }
`;