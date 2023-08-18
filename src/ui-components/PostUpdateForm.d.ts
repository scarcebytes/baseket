/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Post, Baseket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostUpdateFormInputValues = {
    image?: string;
    description?: string;
    tokenAddress?: string;
    tokenId?: string;
    rootToken?: boolean;
    basekets?: Baseket[];
};
export declare type PostUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tokenAddress?: ValidationFunction<string>;
    tokenId?: ValidationFunction<string>;
    rootToken?: ValidationFunction<boolean>;
    basekets?: ValidationFunction<Baseket>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostUpdateFormOverridesProps = {
    PostUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tokenAddress?: PrimitiveOverrideProps<TextFieldProps>;
    tokenId?: PrimitiveOverrideProps<TextFieldProps>;
    rootToken?: PrimitiveOverrideProps<SwitchFieldProps>;
    basekets?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PostUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    post?: Post;
    onSubmit?: (fields: PostUpdateFormInputValues) => PostUpdateFormInputValues;
    onSuccess?: (fields: PostUpdateFormInputValues) => void;
    onError?: (fields: PostUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostUpdateFormInputValues) => PostUpdateFormInputValues;
    onValidate?: PostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostUpdateForm(props: PostUpdateFormProps): React.ReactElement;
