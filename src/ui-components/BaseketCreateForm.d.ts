/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BaseketCreateFormInputValues = {
    type?: string;
};
export declare type BaseketCreateFormValidationValues = {
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BaseketCreateFormOverridesProps = {
    BaseketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BaseketCreateFormProps = React.PropsWithChildren<{
    overrides?: BaseketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BaseketCreateFormInputValues) => BaseketCreateFormInputValues;
    onSuccess?: (fields: BaseketCreateFormInputValues) => void;
    onError?: (fields: BaseketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BaseketCreateFormInputValues) => BaseketCreateFormInputValues;
    onValidate?: BaseketCreateFormValidationValues;
} & React.CSSProperties>;
export default function BaseketCreateForm(props: BaseketCreateFormProps): React.ReactElement;
