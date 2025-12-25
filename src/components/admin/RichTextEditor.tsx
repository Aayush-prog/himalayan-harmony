'use client';

import { useState } from 'react';
import styles from './RichTextEditor.module.css';

interface RichTextEditorProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function RichTextEditor({ label, value, onChange }: RichTextEditorProps) {
    // Simple toolbar simulation
    const insertTag = (tag: string) => {
        // In a real editor, this would insert at cursor. Here we just append for demo simplicity.
        onChange(value + `\n<${tag}>New ${tag}...</${tag}>`);
    };

    return (
        <div className={styles.editorWrapper}>
            <label className={styles.label}>{label}</label>
            <div className={styles.toolbar}>
                <button type="button" onClick={() => insertTag('h3')} className={styles.toolBtn}>H3</button>
                <button type="button" onClick={() => insertTag('p')} className={styles.toolBtn}>Paragraph</button>
                <button type="button" onClick={() => insertTag('strong')} className={styles.toolBtn}>Bold</button>
                <button type="button" onClick={() => insertTag('ul')} className={styles.toolBtn}>List</button>
            </div>
            <textarea
                className={styles.textarea}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={10}
                placeholder="Write your article content here (HTML supported)..."
            />
            <div className={styles.preview}>
                <small>Preview:</small>
                <div className={styles.previewContent} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
        </div>
    );
}
