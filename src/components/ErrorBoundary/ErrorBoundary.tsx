import React, { Component } from 'react';
import { ErrorIndicator } from '../ErrorIndicator';
import { ErrorBoundaryState } from './state';
import { ErrorBoundaryProps } from './props';
import './ErrorBoundary.scss';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = new ErrorBoundaryState();
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}