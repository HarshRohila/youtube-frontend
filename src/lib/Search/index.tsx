import { h } from "@stencil/core"
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"

interface SearchBarProps {
  onSearchSubmit: (ev: Event) => void
  onSearchTextChange: (ev: Event) => void
  onSearchBtnClick: (ev: Event) => void
  onCloseClick: (ev: Event) => void
  showSearchbar: boolean
}
export function SearchBar({
  onSearchSubmit,
  onSearchTextChange,
  onSearchBtnClick,
  showSearchbar,

  onCloseClick
}: SearchBarProps) {
  return (
    <div class="search-bar">
      {showSearchbar && (
        <form class="search-form" onSubmit={onSearchSubmit}>
          <input type="search" placeholder="Search" onInput={onSearchTextChange} />
        </form>
      )}
      {showSearchbar && (
        <button class="close" onClick={onCloseClick}>
          <x-icon icon={faClose}></x-icon>
        </button>
      )}
      {!showSearchbar && (
        <button class="search" onClick={onSearchBtnClick}>
          <x-icon icon={faSearch}></x-icon>
        </button>
      )}
    </div>
  )
}

interface SuggestionProps {
  suggestions: string[]
}
export function Suggestions({ suggestions }: SuggestionProps) {
  return (
    <ul class="suggestions">
      {suggestions.map(s => (
        <li>{s}</li>
      ))}
    </ul>
  )
}
