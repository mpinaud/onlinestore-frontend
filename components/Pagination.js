import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Link from 'next/link';
import {perPage} from '../config';
import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';

const Pagination_Query = gql`
    query Pagination_Query {
        itemsConnection {
            aggregate {
                count
            }
        }
    }
`;

const Pagination = props => {
    return (
        <Query query={Pagination_Query}>
            {({data, loading, error}) => {
                if (loading) return <p>Loading...</p>;
                const count = data.itemsConnection.aggregate.count;
                const page = props.page;
                // Math.ceil returns the smallest integer greater than or equal to the given number
                const pages = Math.ceil(count / perPage);
                return (
                    <PaginationStyles>
                        <Head>
                            <title>
                                Sick Fits! - Page {page} of {pages}
                            </title>
                        </Head>
                        <Link
                            // prefetch the previous and next page
                            prefetch
                            href={{
                                pathname: 'items',
                                query: {page: page - 1},
                            }}
                        >
                            {/* Disable link if on page one */}
                            <a className="prev" aria-disabled={page <= 1}>
                                {' '}
                                {`<- prev`}{' '}
                            </a>
                        </Link>
                        <p>
                            Page {props.page} of {pages}
                        </p>
                        <p>{count} Items Total</p>
                        <Link
                            prefetch
                            href={{
                                pathname: 'items',
                                query: {page: page + 1},
                            }}
                        >
                            {/* Disable link if on page one */}
                            <a className="prev" aria-disabled={page >= pages}>
                                {`next ->`}
                            </a>
                        </Link>
                    </PaginationStyles>
                );
            }}
        </Query>
    );
};

export default Pagination;
