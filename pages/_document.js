import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

// This custom document prevents the server side render to show an un-styled UI before the client side mounts it styled components
//  * [Next.js](https://github.com/zeit/next.js/#custom-document)
//  * [Styled Components](https://www.styled-components.com/docs/advanced#nextjs)

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
