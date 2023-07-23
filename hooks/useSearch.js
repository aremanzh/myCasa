import { useState, useContext } from "react";
import { ListingContext } from "../context/ListingContext";

export default function useSearch() {
  const { listing, setListing } = useContext(ListingContext);
  const [keyword, setKeyword] = useState("");

  const filteredList = listing?.listing?.filter((l) => l.listing.toLowerCase().includes(keyword))

  return { keyword, setKeyword, filteredList }
}
