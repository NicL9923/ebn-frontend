--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blogposts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogposts (
    title character varying(255),
    author character varying(255),
    datecreated timestamp without time zone,
    pathtobodyfile character varying(255),
    pathtoimgfile character varying(255),
    id integer NOT NULL
);


ALTER TABLE public.blogposts OWNER TO postgres;

--
-- Name: blogposts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blogposts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogposts_id_seq OWNER TO postgres;

--
-- Name: blogposts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blogposts_id_seq OWNED BY public.blogposts.id;


--
-- Name: contactmessages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contactmessages (
    subject character varying(255),
    email character varying(255),
    message text,
    id integer NOT NULL,
    datecreated timestamp without time zone
);


ALTER TABLE public.contactmessages OWNER TO postgres;

--
-- Name: contactmessages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contactmessages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contactmessages_id_seq OWNER TO postgres;

--
-- Name: contactmessages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contactmessages_id_seq OWNED BY public.contactmessages.id;


--
-- Name: podcasts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.podcasts (
    title character varying(255),
    datecreated timestamp without time zone,
    pathtoaudiofile character varying(255),
    id integer NOT NULL,
    audiosize character varying(255),
    audioduration character varying(255)
);


ALTER TABLE public.podcasts OWNER TO postgres;

--
-- Name: podcasts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.podcasts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.podcasts_id_seq OWNER TO postgres;

--
-- Name: podcasts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.podcasts_id_seq OWNED BY public.podcasts.id;


--
-- Name: blogposts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogposts ALTER COLUMN id SET DEFAULT nextval('public.blogposts_id_seq'::regclass);


--
-- Name: contactmessages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contactmessages ALTER COLUMN id SET DEFAULT nextval('public.contactmessages_id_seq'::regclass);


--
-- Name: podcasts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.podcasts ALTER COLUMN id SET DEFAULT nextval('public.podcasts_id_seq'::regclass);


--
-- Data for Name: blogposts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogposts (title, author, datecreated, pathtobodyfile, pathtoimgfile, id) FROM stdin;
Post 1	Nicolas Layne	2020-09-18 02:19:38.284	C:/explorers/blogposts/Post 1_2020-09-18.txt	\N	6
Post 2	Kimberly Mexicano	2020-09-18 02:19:48.353	C:/explorers/blogposts/Post 2_2020-09-18.txt	\N	7
Third post fellas	Niccy Boi	2020-09-18 19:26:54.796	C:/explorers/blogposts/Third post fellas_2020-09-18.txt	\N	8
\.


--
-- Data for Name: contactmessages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contactmessages (subject, email, message, id, datecreated) FROM stdin;
Test0	nicl9923@yahoo.com	Howdy folks, this is test 0!	1	2020-09-09 00:01:28.133
Test1	nicl9923@yahoo.com	Howdy folks, this is test 1!	2	2020-09-09 00:20:39.825
Test3	nicl9923@yahoo.com	Howdy, test 3 up!	8	2020-09-09 00:30:59.915
Test4		Howdy, test 4 up!	9	2020-09-09 00:31:49.541
\.


--
-- Data for Name: podcasts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.podcasts (title, datecreated, pathtoaudiofile, id, audiosize, audioduration) FROM stdin;
Podcast Uno	2020-09-19 13:24:15	C:/explorers/podcasts/Podcast Uno_Sat Sep 19.mp3	6	9.38	245.57
Podcast Dos	2020-09-19 13:24:34	C:/explorers/podcasts/Podcast Dos_Sat Sep 19.mp3	7	9.38	245.57
Podcast Tres	2020-09-19 13:24:37	C:/explorers/podcasts/Podcast Tres_Sat Sep 19.mp3	8	9.38	245.57
Different Podcast	2020-09-19 13:33:01	C:/explorers/podcasts/Different Podcast_Sat Sep 19.mp3	9	20.44	893.14
\.


--
-- Name: blogposts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blogposts_id_seq', 8, true);


--
-- Name: contactmessages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contactmessages_id_seq', 9, true);


--
-- Name: podcasts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.podcasts_id_seq', 9, true);


--
-- Name: blogposts blogposts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogposts
    ADD CONSTRAINT blogposts_pkey PRIMARY KEY (id);


--
-- Name: contactmessages contactmessages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contactmessages
    ADD CONSTRAINT contactmessages_pkey PRIMARY KEY (id);


--
-- Name: podcasts podcasts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.podcasts
    ADD CONSTRAINT podcasts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

