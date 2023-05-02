create table JSON_TRANSLATION
(
    ID BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    ORIGINAL_TEXT VARCHAR(8000) not null,
    TRANSLATION_TEXT   VARCHAR(8000)
);

comment on table JSON_TRANSLATION is 'json翻译表';

comment on column JSON_TRANSLATION.ORIGINAL_TEXT is '原文';

comment on column JSON_TRANSLATION.TRANSLATION_TEXT is '译文';


