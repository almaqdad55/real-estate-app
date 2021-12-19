import { useEffect, useState } from 'react';
import { filterData, getFilterValues } from '../utils/filterData';
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  return (
    <Flex
      bg={'gray.100'}
      p="4"
      justifyContent={'center'}
      flexWrap={'wrap'}
    ></Flex>
  );
};

export default SearchFilters;
