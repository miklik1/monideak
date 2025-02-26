import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Aktuality')
    .items([
      S.documentTypeListItem('post').title('Aktuality'),
      S.documentTypeListItem('category').title('Kategorie'),
      S.documentTypeListItem('author').title('Autoři'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
