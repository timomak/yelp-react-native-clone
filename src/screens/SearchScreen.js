import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
//import { TextInput } from "react-native-gesture-handler";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {/* <Text style={{ marginLeft: 15 }}>
        We have found {results.length} results
      </Text> */}
      <ScrollView>
        <ResultList
          restaurants={filterResultByPrice("$")}
          title="Cost Effective"
        />

        <ResultList
          restaurants={filterResultByPrice("$$")}
          title="Bit Pricier"
        />

        <ResultList
          restaurants={filterResultByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
