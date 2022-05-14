import styled from "styled-components";
import { MOBILE_SIZE } from "../constants/index";

// layOut
export const smLayout = `@media screen and (max-width: ${MOBILE_SIZE})`;
export const mdLayout = `@media screen and (min-width: 790px) and (max-width: ${MOBILE_SIZE})`;
export const xlLayout = `@media screen and (min-width: ${MOBILE_SIZE}) and (max-width: 1365px)`;
export const uxLayout = `@media screen and (min-width: 1921px) and (max-width: 3820px)`;
