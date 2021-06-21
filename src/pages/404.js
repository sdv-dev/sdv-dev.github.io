import React from 'react'
import { Link } from 'gatsby'
import { Article } from "../components/common";

const NotFoundPage = () => (
    <Article>
        <div className="container pt-48">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body">
                    Page not found, <Link to="/">return home</Link> to start over
                </section>
            </article>
        </div>
    </Article>
)

export default NotFoundPage
