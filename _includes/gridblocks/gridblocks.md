# More About The `gridtype` Parameter in `photo-block.html`

## The `gridtype` parameter controls two things
1. The [Bootstrap 4] padding classes that get added on to a photo-block
2. The width/grid classes that get addded on to a photo-block

Grid types are named like this: `[columnWidths]-[blockAlignment]`.

Column widths are based on the non-collapsed widths.
Block alignment is named semantically according to the presentation on the frontend.

## Examples
- `66-left`
  - The photo-block is part of a row that contains two half-width blocks. 
  - This photo-block is the first (left) block out of that set.
- `363-mid`
  - The photo-block is part of a row that contains a 1/4 width block, a 1/2 width block, and another 1/4 width block, in that order.
  - As this block is designated 'mid', it's the second block (the 1/2 width) in the set.

## More Notes
- For padding assignments, the left side classes are listed first, then the right side classes. Both in order by screen size. 
- For width assignments, the first class listed is the largest (non-collapsed, non-mobile) width. This is so the "true" width is seen more easily, and the list is more easily scannable.