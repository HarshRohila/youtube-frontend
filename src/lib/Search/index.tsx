import { h } from "@stencil/core"
import { faSearch, faClose, faSpinner, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { IAppError } from "../redux/global"

export { Videos } from "./Videos"

interface SearchBarProps {
  onSearchSubmit: (ev: Event) => void
  onSearchTextChange: (ev: Event) => void
  onSearchBtnClick?: (ev: Event) => void
  onCloseClick: (ev: Event) => void
  showSearchbar: boolean
  searchText: string
  onClickBack?: () => void
}
export function SearchBar({
  onSearchSubmit,
  onSearchTextChange,
  onSearchBtnClick,
  searchText,
  showSearchbar,
  onCloseClick,
  onClickBack
}: SearchBarProps) {
  return (
    <div class="search-bar">
      {onClickBack && (
        <button class="back" onClick={onClickBack}>
          <x-icon icon={faArrowLeftLong}></x-icon>
        </button>
      )}

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
  error: IAppError | undefined
  loading: boolean
}
export function Suggestions({ suggestions, onClickSuggesion, error, loading }: SuggestionProps) {
  return (
    <div class="suggestions-container">
      {error && <div class="error">{error.message}</div>}
      {loading && (
        <div class="loading">
          <x-icon icon={faSpinner} spin></x-icon>
        </div>
      )}
      <ul class="suggestions">
        {!loading && !error && suggestions.map(s => <li onClick={() => onClickSuggesion(s)}>{s}</li>)}
      </ul>
    </div>
  )
}
