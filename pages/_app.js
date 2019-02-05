import App, { Container } from 'next/app';
import Page from '../components/Page';

// Next.js uses the App component to initialize pages. You can override it and control the page initialization which allows you to do:
//  * Persisting layout between page changes
//  * Keeping state when navigating pages
//  * Custom error handling using componentDidCatch
//  * Inject additional data into pages(for example by processing GraphQL queries)

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Container>
                <Page>
                    <Component/>
                </Page>
            </Container>
        )
    }
}

export default MyApp;

