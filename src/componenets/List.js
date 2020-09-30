import React, { useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";

const List = ({ list }) => {
	const [listItems, setListItems] = useState(
		Array.from(Array(151).keys(), n => n + 1)
	);
	// eslint-disable-next-line
	const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

	function fetchMoreListItems() {
		setTimeout(() => {
			setListItems(prevState => [
				...prevState,
				...Array.from(Array(151).keys(), n => n + prevState.length + 1),
			]);
			setIsFetching(false);
		}, 1500);
	}

	return <>{listItems.map(listItem => list[listItem - 1])}</>;
};

export default List;
