import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className="pagination font-bold flex justify-center py-6 -mx-6" role="navigation">
                {previousPagePath && (
                <div className="px-6">
                    <Link to={previousPagePath} rel="prev" className="text-sdv-highlight">
                        Previous
                    </Link>
                </div>
                )}
            {numberOfPages > 1 && <div className="pagination-location px-6">Page {humanPageNumber} of {numberOfPages}</div>}
                {nextPagePath && (
                    <div className="px-6">
                        <Link to={nextPagePath} rel="next" className="text-sdv-highlight">
                                Next
                        </Link>
                    </div>
                )}
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
