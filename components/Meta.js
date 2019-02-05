import Head from 'next/head';

// Must use Next.js Head API to update Meta Tags

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        {/* Styles for progess bar */}
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        {/* Default meta tag which will be updated as a side effect from other components */}
        <title>Sick Fits!</title>
    </Head>
)

export default Meta;