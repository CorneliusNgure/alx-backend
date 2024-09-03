#!/usr/bin/env python3
"""
Function returning start and end indices of paginated data
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple of start and end indices of a paginated data

    Args:
        - page (int): 1-indexed page no.
        - page_size (int): No. of rows per page.

    Returns:
        - tuple containing start and end indices of paginated data.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
