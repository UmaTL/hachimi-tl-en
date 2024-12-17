declare namespace zk {
    function loadDict(relPath: string): Promise<any>;
    function saveDict(relPath: string, content: any): Promise<void>;
    /**
     * Updates a dict file. Use this instead of loadDict/saveDict when updating
     * dicts to preserve the entry orders.
     * @param relPath Path to the dict file, relative to localized_data.
     * @param updateFn Update function. Return `false` to skip saving.
     */
    function updateDict(relPath: string, updateFn: (json: JsonValue) => Promise<boolean | void> | boolean | void): Promise<void>;

    function loadLocalizedDataConfig(): Promise<LocalizedDataConfig>;

    function showInfo(message: string): void;
    function showWarning(message: string): void;
    function showError(message: string): void;
}

declare namespace zk.mdb {
    function loadTextData(): Promise<{[key: string]: {[key: string]: string}}>;
    function loadCharacterSystemText(): Promise<{[key: string]: {[key: string]: string}}>;
    function loadRaceJikkyoComment(): Promise<{[key: string]: string}>;
    function loadRaceJikkyoMessage(): Promise<{[key: string]: string}>;
}

interface JsonValue {
    get(index: any): JsonValue | undefined;
    set(index: any, value: any): void;
    length: number;
    value: any;
    type: string;
    toJson(indent?: number): string;
}

interface LocalizedDataConfig {
    localize_dict?: string,
    hashed_dict?: string,
    text_data_dict?: string,
    character_system_text_dict?: string,
    race_jikkyo_comment_dict?: string,
    race_jikkyo_message_dict?: string,
    assets_dir?: string,

    plural_form?: string,
    ordinal_form?: string,
    ordinal_types: string[],
    months: string[],
    month_text_format?: string,

    use_text_wrapper: boolean,
    line_width_multiplier?: number,

    auto_adjust_story_clip_length: boolean,
    story_line_count_offset?: number,
    text_frame_line_spacing_multiplier?: number,
    text_frame_font_size_multiplier?: number,
    skill_list_item_desc_font_size_multiplier?: number,
    text_common_allow_overflow: boolean,
    now_loading_comic_title_ellipsis: boolean,

    remove_ruby: boolean,
    character_note_top_gallery_button?: UITextConfig,
    character_note_top_talk_gallery_button?: UITextConfig,

    news_url?: string,
}

interface UITextConfig {
    text?: string,
    font_size?: number,
    line_spacing?: number
}