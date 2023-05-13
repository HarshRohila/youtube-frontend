import { h } from "@stencil/core"
import { faClose } from "@fortawesome/free-solid-svg-icons"

interface ModalProps {
  onClose?: () => void
}
export function Modal({ onClose }: ModalProps, children) {
  return (
    <div class="modal-container">
      <div class="modal">
        {children}
        {onClose && (
          <button class="close-btn" onClick={onClose}>
            <x-icon icon={faClose}></x-icon>
          </button>
        )}
      </div>
    </div>
  )
}
