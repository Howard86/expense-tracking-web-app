import React, { FC, memo } from 'react';
import NextLink from 'next/link';
import { Link, LinkProps, useStyleConfig } from '@chakra-ui/react';

interface RouterLinkProps extends LinkProps {
  href: string;
  text: string;
}

const RouterLink: FC<RouterLinkProps> = ({ href, text, ...props }) => {
  const styles = useStyleConfig('Button', {
    ...props,
    colorScheme: 'blue',
  });

  return (
    <NextLink href={href} passHref>
      <Link sx={styles} py="2">
        {text}
      </Link>
    </NextLink>
  );
};

export default memo(RouterLink);
