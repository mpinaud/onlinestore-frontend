import App, { Container } from 'next/app';

// Next.js uses the App component to initialize pages. You can override it and control the page initialization which allows you to do:
//  * Persisting layout between page changes
//  * Keeping state when navigating pages
//  * Custom error handling using componentDidCatch
//  * Inject additional data into pages(for example by processing GraphQL queries)
import Page from '../components/Page';

import {ApolloProvider} from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
    // Explicitly get page values to add to our URL from Next.js' getInitialProps() life-cycle method. This is called before render on the server side.
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query;
        return {pageProps};
    }

    render() {
        const {Component, apollo, pageProps} = this.props;
        return (
            <Container>
                {/* Connected to GraphQL Yoga */}
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(MyApp);
