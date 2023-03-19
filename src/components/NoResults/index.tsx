import type { ReactNode, ReactElement } from 'react'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import { Container, ImageContainer } from './styles'

interface NoResultsProps {
  noResultTitle: string
  noResultDescription?: string
  noResultImage: ReactElement
  children?: ReactNode
  clearFilters?: () => void
  hasClearFilter?: boolean
  loading: boolean
}

const NoResults = ({
  noResultTitle,
  noResultDescription,
  children,
  clearFilters,
  hasClearFilter = false,
  loading = false,
  noResultImage,
}: NoResultsProps) => (
  <Container>
    <ImageContainer>{noResultImage}</ImageContainer>

    <Box textAlign="center">
      <Typography fontWeight="500">{noResultTitle}</Typography>
      <Typography color="#828282">{noResultDescription}</Typography>
      {hasClearFilter && (
        <Box>
          <LoadingButton
            variant="text"
            onClick={clearFilters}
            loading={loading}
          >
            Clear Filters
          </LoadingButton>
        </Box>
      )}
    </Box>
    {children}
  </Container>
)
export default NoResults
