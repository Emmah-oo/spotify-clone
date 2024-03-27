import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const {isOpen, onClose} = useUploadModal()

  const onChange = () => {
    onClose()
  }
  return (
    <Modal
      title="Upload Modal title"
      desription="Upload Modal description"
      isOpen={isOpen}
      onChange={onChange}
    >
      Upload Content
    </Modal>
  );
};

export default UploadModal;
