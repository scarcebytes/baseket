/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Human, Baseket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HumanUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    basekets?: Baseket[];
};
export declare type HumanUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    basekets?: ValidationFunction<Baseket>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HumanUpdateFormOverridesProps = {
    HumanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    basekets?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type HumanUpdateFormProps = React.PropsWithChildren<{
    overrides?: HumanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    human?: Human;
    onSubmit?: (fields: HumanUpdateFormInputValues) => HumanUpdateFormInputValues;
    onSuccess?: (fields: HumanUpdateFormInputValues) => void;
    onError?: (fields: HumanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HumanUpdateFormInputValues) => HumanUpdateFormInputValues;
    onValidate?: HumanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HumanUpdateForm(props: HumanUpdateFormProps): React.ReactElement;
