import { h } from "@stencil/core"
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"

interface SearchBarProps {
  onSearchSubmit: (ev: Event) => void
  onSearchTextChange: (ev: Event) => void
  onSearchBtnClick: (ev: Event) => void
  onCloseClick: (ev: Event) => void
  showSearchbar: boolean
  searchText: string
}
export function SearchBar({
  onSearchSubmit,
  onSearchTextChange,
  onSearchBtnClick,
  searchText,
  showSearchbar,
  onCloseClick
}: SearchBarProps) {
  return (
    <div class="search-bar">
      <form
        class={"search-form " + (showSearchbar ? "" : "hide")}
        onSubmit={ev => {
          ev.preventDefault()
          onSearchSubmit(ev)
        }}
      >
        <input type="text" class="search-input" value={searchText} placeholder="Search" onInput={onSearchTextChange} />
      </form>
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
  onClickSuggesion: (suggestion: string) => void
}
export function Suggestions({ suggestions, onClickSuggesion }: SuggestionProps) {
  return (
    <ul class="suggestions">
      {suggestions.map(s => (
        <li onClick={() => onClickSuggesion(s)}>{s}</li>
      ))}
    </ul>
  )
}
