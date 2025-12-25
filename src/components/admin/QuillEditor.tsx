import ReactQuill from 'react-quill-new';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import styles from './QuillEditor.module.css';

interface QuillEditorProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    height?: string;
}

export default function QuillEditor({ value, onChange, label, height = '300px' }: QuillEditorProps) {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    return (
        <div className={styles.editorWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.quillContainer} style={{ height }}>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules}
                    formats={formats}
                    className={styles.quill}
                />
            </div>
        </div>
    );
}
