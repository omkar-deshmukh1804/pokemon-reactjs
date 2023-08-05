import React from 'react';

export default function Pagination({gotoPrevPage, gotoNextPage}) {
    return (
        <div className='pagination-buttons'>
            {gotoPrevPage && <button className="button-54" role="button"
                onClick={gotoPrevPage}> Previous
            </button>}
            {gotoNextPage && <button className="button-54" role="button"
                onClick={gotoNextPage}> Next
            </button>}
        </div>
    )
}