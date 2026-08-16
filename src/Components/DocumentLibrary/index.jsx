import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const getDocumentHref = (documentItem) => documentItem.href || documentItem.url || "#";

const getDocumentMeta = (documentItem) =>
  [documentItem.type, documentItem.year, documentItem.size].filter(Boolean).join(" · ");

function DocumentList({ documents, labels, panelId }) {
  if (!documents.length) {
    return (
      <div className="cs_document_folder_empty" id={panelId}>
        <Icon icon="lucide:file-x-2" width="22" height="22" />
        <span>{labels.empty}</span>
      </div>
    );
  }

  return (
    <div className="cs_document_file_list" id={panelId}>
      {documents.map((documentItem, index) => (
        <a
          className="cs_document_file"
          href={getDocumentHref(documentItem)}
          key={`${documentItem.title}-${index}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="cs_document_file_number">{String(index + 1).padStart(2, "0")}</span>
          <span className="cs_document_file_icon cs_center">
            <Icon icon="lucide:file-text" width="21" height="21" />
          </span>
          <span className="cs_document_file_body">
            <span className="cs_document_file_title">{documentItem.title}</span>
            {getDocumentMeta(documentItem) && (
              <span className="cs_document_file_meta">{getDocumentMeta(documentItem)}</span>
            )}
          </span>
          <span className="cs_document_file_action cs_center" title={labels.openDocument}>
            <Icon icon="lucide:download" width="19" height="19" />
          </span>
        </a>
      ))}
    </div>
  );
}

export default function DocumentLibrary({ data, compact = false }) {
  const categories = data.categories;
  const featuredDocuments = compact
    ? categories
        .map((category, index) => {
          const documents = category.documents || [];
          const documentItem = documents.length ? documents[index % documents.length] : null;

          return documentItem ? { ...documentItem, category: category.title } : null;
        })
        .filter(Boolean)
    : [];
  const [openFolderIds, setOpenFolderIds] = useState(() => new Set());

  useEffect(() => {
    if (compact) return;

    const requestedFolderId = window.location.hash.replace("#", "");
    const folderExists = data.categories.some((category) => category.id === requestedFolderId);

    if (folderExists) {
      setOpenFolderIds((currentFolderIds) => {
        const nextFolderIds = new Set(currentFolderIds);
        nextFolderIds.add(requestedFolderId);
        return nextFolderIds;
      });
      window.requestAnimationFrame(() => {
        document.getElementById(requestedFolderId)?.scrollIntoView({ block: "center" });
      });
    }
  }, [compact, data.categories]);

  const getDocumentCount = (documents = []) => {
    const count = documents.length;
    return `${count} ${count === 1 ? data.labels.document : data.labels.documents}`;
  };

  const toggleFolder = (folderId) => {
    setOpenFolderIds((currentFolderIds) => {
      const nextFolderIds = new Set(currentFolderIds);

      if (nextFolderIds.has(folderId)) {
        nextFolderIds.delete(folderId);
      } else {
        nextFolderIds.add(folderId);
      }

      return nextFolderIds;
    });
  };

  const isFolderOpen = (folderId) => openFolderIds.has(folderId);

  return (
    <section className={`cs_document_library ${compact ? "cs_document_library_compact" : ""}`}>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_document_library_head">
          <div className="cs_section_heading cs_style_4">
            <p className="cs_brackets_title cs_normal cs_fs_16 mb-0">{data.eyebrow}</p>
            <h2
              className="cs_section_title cs_fs_48 cs_bold mb-0"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
          </div>
          {compact && <p className="cs_document_library_intro mb-0">{data.previewDescription}</p>}
        </div>

        <div className="cs_height_50 cs_height_lg_35" />

        {compact ? (
          <div className="cs_document_shortcuts">
            {featuredDocuments.map((documentItem, index) => (
              <a
                className="cs_document_shortcut"
                href={getDocumentHref(documentItem)}
                key={`${documentItem.title}-${index}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="cs_document_shortcut_icon cs_center">
                  <Icon icon="lucide:file-text" width="22" height="22" />
                </span>
                <span className="cs_document_shortcut_body">
                  <span className="cs_document_shortcut_category">{documentItem.category}</span>
                  <span className="cs_document_shortcut_title">{documentItem.title}</span>
                  <span className="cs_document_shortcut_meta">{getDocumentMeta(documentItem)}</span>
                </span>
                <span className="cs_document_shortcut_action cs_center" title={data.labels.openDocument}>
                  <Icon icon="lucide:download" width="18" height="18" />
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="cs_document_categories">
            {categories.map((category, index) => (
              <div
                className={`cs_document_folder ${isFolderOpen(category.id) ? "cs_is_open" : ""}`}
                id={category.id}
                key={category.id}
              >
                <button
                  type="button"
                  className="cs_document_folder_toggle"
                  aria-expanded={isFolderOpen(category.id)}
                  aria-controls={`${category.id}-documents`}
                  onClick={() => toggleFolder(category.id)}
                >
                  <span className="cs_document_folder_icon cs_center">
                    <Icon
                      icon={isFolderOpen(category.id) ? "lucide:folder-open" : "lucide:folder-closed"}
                      width="25"
                      height="25"
                    />
                  </span>
                  <span className="cs_document_folder_heading">
                    <span className="cs_document_folder_index">
                      {String(index + 1).padStart(2, "0")} / {data.categories.length}
                    </span>
                    <span className="cs_document_category_title cs_fs_24 cs_bold">{category.title}</span>
                    <span className="cs_document_category_desc">{category.description}</span>
                  </span>
                  <span className="cs_document_category_action">
                    <span>{getDocumentCount(category.documents)}</span>
                    <Icon
                      icon="lucide:chevron-down"
                      width="20"
                      height="20"
                      className={isFolderOpen(category.id) ? "cs_is_open" : ""}
                    />
                  </span>
                </button>
                <div
                  className={`cs_document_folder_panel ${isFolderOpen(category.id) ? "cs_is_open" : ""}`}
                  aria-hidden={!isFolderOpen(category.id)}
                >
                  <div className="cs_document_folder_panel_inner">
                    <DocumentList
                      documents={category.documents || []}
                      labels={data.labels}
                      panelId={`${category.id}-documents`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {compact ? (
          <div className="cs_document_library_footer">
            <Link to="/documents" className="cs_btn cs_style_2 cs_bold cs_heading_color">
              {data.buttonText}
            </Link>
          </div>
        ) : (
          <>
            <div className="cs_height_24" />
            <div className={`cs_document_guide_folder ${isFolderOpen("guide") ? "cs_is_open" : ""}`}>
              <button
                type="button"
                className="cs_document_guide"
                aria-expanded={isFolderOpen("guide")}
                aria-controls="guide-documents"
                onClick={() => toggleFolder("guide")}
              >
                <span className="cs_document_guide_icon cs_center">
                  <Icon icon={data.guide.icon} width="28" height="28" />
                </span>
                <span className="cs_document_guide_content">
                  <span className="cs_document_guide_eyebrow">{data.guide.eyebrow}</span>
                  <span className="cs_document_guide_title cs_fs_32 cs_bold">{data.guide.title}</span>
                  <span className="cs_document_guide_desc">{data.guide.description}</span>
                </span>
                <span className="cs_document_guide_mark">
                  <span>{getDocumentCount(data.guide.documents)}</span>
                  <Icon
                    icon="lucide:chevron-down"
                    width="22"
                    height="22"
                    className={isFolderOpen("guide") ? "cs_is_open" : ""}
                  />
                </span>
              </button>
              <div
                className={`cs_document_folder_panel ${isFolderOpen("guide") ? "cs_is_open" : ""}`}
                aria-hidden={!isFolderOpen("guide")}
              >
                <div className="cs_document_folder_panel_inner">
                  <DocumentList
                    documents={data.guide.documents || []}
                    labels={data.labels}
                    panelId="guide-documents"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
