/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Baseket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HumanCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    basekets?: Baseket[];
};
export declare type HumanCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    basekets?: ValidationFunction<Baseket>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HumanCreateFormOverridesProps = {
    HumanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    basekets?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type HumanCreateFormProps = React.PropsWithChildren<{
    overrides?: HumanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HumanCreateFormInputValues) => HumanCreateFormInputValues;
    onSuccess?: (fields: HumanCreateFormInputValues) => void;
    onError?: (fields: HumanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HumanCreateFormInputValues) => HumanCreateFormInputValues;
    onValidate?: HumanCreateFormValidationValues;
} & React.CSSProperties>;
export default function HumanCreateForm(props: HumanCreateFormProps): React.ReactElement;
