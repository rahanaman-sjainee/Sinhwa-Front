import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorType: null };
    }

    static getDerivedStateFromError(error) {
        // 특정 예외를 처리하기 위한 조건 설정
        if (error.name === "LoginError") {
            return { hasError: true, errorType: "custom" };
        }

        // 기본 예외 처리
        return { hasError: true, errorType: "generic" };
    }

    componentDidCatch(error, errorInfo) {
        // 로깅이나 추가 처리 가능
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {

            if (this.state.errorType === "custom") {
                return <h1>This is a custom error message.</h1>;
            }

            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
