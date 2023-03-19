import React, { useMemo } from 'react'
import type { FC } from 'react'
import { Box, Grid, Zoom } from '@mui/material'
import { Span, SelectedOptionItem, UnselectedOptionItem } from './styles'

interface FilterProps {
  label: string
  options: any[]
  selectedOption: number | string
  totalCount: number
  onChange: (newFilter: number | string) => void
  refKey?: string
  refValue?: string
}

export const FilterBar: FC<FilterProps> = ({
  label,
  options,
  selectedOption,
  totalCount,
  onChange,
  refKey = 'id',
  refValue = 'name',
}: FilterProps) => {
  const list = useMemo(
    () =>
      options.map((item, index) => {
        if (selectedOption === item?.[refKey]) {
          return (
            <Zoom in style={{ transitionDelay: '100ms' }} key={index}>
              <SelectedOptionItem
                type="button"
                title={item.name}
                onClick={() =>
                  onChange(
                    item?.[refKey] === selectedOption ? '' : item?.[refKey]
                  )
                }
              >
                {item.name} {totalCount >= 0 ? `(${totalCount})` : null}
              </SelectedOptionItem>
            </Zoom>
          )
        }

        return (
          <Zoom in style={{ transitionDelay: '100ms' }} key={index}>
            <UnselectedOptionItem
              title={item?.[refValue]}
              type="button"
              onClick={() => onChange(item?.[refKey])}
            >
              {item?.[refValue]}
            </UnselectedOptionItem>
          </Zoom>
        )
      }),
    [selectedOption, totalCount, options]
  )

  return (
    <Box>
      <Grid
        container
        display="flex"
        gap={{ xs: 1, sm: 1.5 }}
        alignItems="center"
        pt={{ xs: 1, md: 1.2 }}
        pb={{ xs: 1, md: 1.2 }}
      >
        <Grid item>
          <Span>{label}</Span>
        </Grid>
        {list}
      </Grid>
    </Box>
  )
}
