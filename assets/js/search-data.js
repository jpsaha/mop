// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/mop/";
    },
  },{id: "dropdown-algebra",
              title: "Algebra",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/Algebra/";
              },
            },{id: "dropdown-combinatorics",
              title: "Combinatorics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/Combinatorics/";
              },
            },{id: "dropdown-geometry",
              title: "Geometry",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/Geometry/";
              },
            },{id: "dropdown-number-theory",
              title: "Number Theory",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/NumberTheory/";
              },
            },{id: "dropdown-resources",
              title: "Resources",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/Resources/";
              },
            },{id: "dropdown-past-papers",
              title: "Past Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/PastPapers/";
              },
            },{id: "nav-ioqm",
          title: "IOQM",
          description: "Indian Olympiad Qualifier in Mathematics",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/IOQM/";
          },
        },{id: "nav-rmo",
          title: "RMO",
          description: "Regional Mathematical Olympiad",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/RMO/";
          },
        },{id: "nav-inmo",
          title: "INMO",
          description: "Indian National Mathematical Olympiad",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/INMO/";
          },
        },{id: "nav-inmotc",
          title: "INMOTC",
          description: "INMO Training Camp 2025, Madhya Predesh region",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/INMOTC/";
          },
        },{id: "nav-imotc",
          title: "IMOTC",
          description: "IMOTC 2025, held at the Chennai Mathematical Institute",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/IMOTC/";
          },
        },{id: "dropdown-prior-participations",
              title: "Prior Participations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/PriorParticipation/";
              },
            },{id: "dropdown-imo",
              title: "IMO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/IMO/";
              },
            },{id: "dropdown-apmo",
              title: "APMO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/APMO/";
              },
            },{id: "dropdown-egmo",
              title: "EGMO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/EGMO/";
              },
            },{id: "dropdown-further-olympiads",
              title: "Further Olympiads",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/MoreOlympiads/";
              },
            },{id: "dropdown-glimpse-of-a-few-problems",
              title: "Glimpse of a few problems",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/GlimpseOfAFewProblems/";
              },
            },{id: "dropdown-slides",
              title: "Slides",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/Slides/";
              },
            },{id: "dropdown-eligibility",
              title: "Eligibility",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mop/Eligibility/";
              },
            },{id: "nav-training",
          title: "Training",
          description: "Training Programs, OTIS, Sophie Fellowship, Online Math Club, ...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/TrainingProg/";
          },
        },{id: "nav-mopss",
          title: "MOPSS",
          description: "Mathematics Olympiad Problem Solving Sessions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mop/MOPSS/";
          },
        },{id: "post-mopss-19th-july-2025",
        
          title: "MOPSS, 19th July 2025",
        
        description: "MOPSS Problems, Walkthroughs, Solutions from 19th July 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/MOPSS25July19/";
          
        },
      },{id: "post-mopss-5th-july-2025",
        
          title: "MOPSS, 5th July 2025",
        
        description: "MOPSS Problems, Walkthroughs, Solutions from 5th July 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/MOPSS25July5/";
          
        },
      },{id: "post-orders",
        
          title: "Orders",
        
        description: "Orders",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Orders/";
          
        },
      },{id: "post-gauss-39-s-lemma",
        
          title: "Gauss&#39;s lemma",
        
        description: "Gauss&#39;s lemma",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Gauss/";
          
        },
      },{id: "post-chinese-remainder-theorem",
        
          title: "Chinese remainder theorem",
        
        description: "Chinese remainder theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/CRT/";
          
        },
      },{id: "post-primes-divisors-and-congruences",
        
          title: "Primes, divisors and congruences",
        
        description: "Primes, divisors and congruences",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Cong/";
          
        },
      },{id: "post-system-of-equations",
        
          title: "System of equations",
        
        description: "System of Equations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/SysEqnNT/";
          
        },
      },{id: "post-binomial-coefficients",
        
          title: "Binomial coefficients",
        
        description: "Binomial coefficients",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/BinCo/";
          
        },
      },{id: "post-quadratic-polynomials",
        
          title: "Quadratic polynomials",
        
        description: "Quadratic polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Quad/";
          
        },
      },{id: "post-using-identities",
        
          title: "Using identities",
        
        description: "Using identities",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Iden/";
          
        },
      },{id: "post-induction",
        
          title: "Induction",
        
        description: "Induction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/IndNT/";
          
        },
      },{id: "post-cubic-polynomials",
        
          title: "Cubic polynomials",
        
        description: "Cubic polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Cubic/";
          
        },
      },{id: "post-telescoping",
        
          title: "Telescoping",
        
        description: "Telescoping",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Tele/";
          
        },
      },{id: "post-inequalities",
        
          title: "Inequalities",
        
        description: "Inequalities",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Ineq/";
          
        },
      },{id: "post-system-of-equations",
        
          title: "System of equations",
        
        description: "System of equations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/SysEqn/";
          
        },
      },{id: "post-integer-divisibility",
        
          title: "Integer divisibility",
        
        description: "Integer divisibility",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/IntDiv/";
          
        },
      },{id: "post-lagrange-interpolation",
        
          title: "Lagrange interpolation",
        
        description: "Lagrange interpolation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/LagrangeInt/";
          
        },
      },{id: "post-crossing-the-x-axis",
        
          title: "Crossing the $$ x $$-axis",
        
        description: "Crossing the $$ x $$-axis, Intermediate value theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/IMVT/";
          
        },
      },{id: "post-roots-of-unity",
        
          title: "Roots of unity",
        
        description: "Roots of unity",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/RootsUnity/";
          
        },
      },{id: "post-size-of-the-roots",
        
          title: "Size of the roots",
        
        description: "Size of the roots",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/RootSize/";
          
        },
      },{id: "post-finite-differences",
        
          title: "Finite differences",
        
        description: "Finite differences",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/FiniteDiff/";
          
        },
      },{id: "post-differentiation-and-multiple-roots",
        
          title: "Differentiation and multiple roots",
        
        description: "Differentiation and multiple roots",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/DiffMultRoot/";
          
        },
      },{id: "post-viete-39-s-relations",
        
          title: "Viete&#39;s relations",
        
        description: "Viete&#39;s relations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Viete/";
          
        },
      },{id: "post-generating-functions",
        
          title: "Generating functions",
        
        description: "Generating functions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/GenFun/";
          
        },
      },{id: "post-counting-in-two-different-ways",
        
          title: "Counting in two different ways",
        
        description: "Counting in two different ways",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/CountTwoDiff/";
          
        },
      },{id: "post-counting-the-complement",
        
          title: "Counting the complement",
        
        description: "Counting the complement",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/CountComple/";
          
        },
      },{id: "post-counting-via-bijections",
        
          title: "Counting via bijections",
        
        description: "Counting via bijections",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/CountBijec/";
          
        },
      },{id: "post-counting",
        
          title: "Counting",
        
        description: "Counting",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Count/";
          
        },
      },{id: "post-grouping-in-pairs",
        
          title: "Grouping in pairs",
        
        description: "Grouping in pairs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/GrpPairs/";
          
        },
      },{id: "post-grouping-in-pairs",
        
          title: "Grouping in pairs",
        
        description: "Arrange in order",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/ArrangeInOrder/";
          
        },
      },{id: "post-extremal-principle",
        
          title: "Extremal principle",
        
        description: "Extremal principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Extremal/";
          
        },
      },{id: "post-pigeonhole-principle",
        
          title: "Pigeonhole principle",
        
        description: "Pigeonhole principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Pigeon/";
          
        },
      },{id: "post-invariance",
        
          title: "Invariance",
        
        description: "Invariance principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Invariance/";
          
        },
      },{id: "post-inclusion-exclusion-principle",
        
          title: "Inclusion-exclusion principle",
        
        description: "Inclusion-exclusion principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/IncluExclu/";
          
        },
      },{id: "post-induction",
        
          title: "Induction",
        
        description: "Induction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/Induction/";
          
        },
      },{id: "post-auxiliary-configuration",
        
          title: "Auxiliary configuration",
        
        description: "Auxiliary configuration in Combinatorics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/AuxConfig/";
          
        },
      },{id: "post-inmotc-2025-mp-region-algebra",
        
          title: "INMOTC 2025 (MP region), Algebra",
        
        description: "INMOTC 2025 (MP region), Algebra",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2025/INMOTC25MPalg/";
          
        },
      },{id: "post-past-question-papers-of-pre-rmo-ioqm-rmo-inmo-egmotc-imotc",
        
          title: "Past Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC",
        
        description: "Previous Years&#39; Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/PastPapers/";
          
        },
      },{id: "post-rational-and-irrational-numbers",
        
          title: "Rational and irrational numbers",
        
        description: "Rational and irrational numbers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Rationals/";
          
        },
      },{id: "post-arithmetic-progressions",
        
          title: "Arithmetic progressions",
        
        description: "Arithmetic progressions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/AP/";
          
        },
      },{id: "post-ioqm",
        
          title: "IOQM",
        
        description: "IOQM 2023 Discussion, Solutions, Answer key",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/IOQM/";
          
        },
      },{id: "post-more-on-polynomials",
        
          title: "More on Polynomials",
        
        description: "More on Polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/MorePoly/";
          
        },
      },{id: "post-binomial-theorem",
        
          title: "Binomial theorem",
        
        description: "Binomial theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Binomial/";
          
        },
      },{id: "post-functional-equations",
        
          title: "Functional equations",
        
        description: "Functional equations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/FuncEq/";
          
        },
      },{id: "post-growth-of-polynomials",
        
          title: "Growth of Polynomials",
        
        description: "Growth of Polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/GrowthOfPoly/";
          
        },
      },{id: "post-quartics",
        
          title: "Quartics",
        
        description: "Quartic polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Quartic/";
          
        },
      },{id: "post-cubic-polynomials",
        
          title: "Cubic polynomials",
        
        description: "Cubic polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Cubic/";
          
        },
      },{id: "post-quadratic-polynomials",
        
          title: "Quadratic polynomials",
        
        description: "Quadratic polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Quadratic/";
          
        },
      },{id: "post-polynomials",
        
          title: "Polynomials",
        
        description: "Polynomials",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Polynomials/";
          
        },
      },{id: "post-invariance-principle",
        
          title: "Invariance principle",
        
        description: "Invariance principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/Invariance/";
          
        },
      },{id: "post-a-3-b-3-c-3-3abc",
        
          title: "$$ a^3+b^3+c^3 - 3abc $$",
        
        description: "$$ a^3+b^3+c^3 - 3abc $$",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/a3b3c3-3abc/";
          
        },
      },{id: "post-warm-up",
        
          title: "Warm Up",
        
        description: "Warm up problems on Algebra",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/WarmUpAlg/";
          
        },
      },{id: "post-problem-set-for-mopss",
        
          title: "Problem set for MOPSS",
        
        description: "Link to the problem set for MOPSS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/PS0B24Aug/";
          
        },
      },{id: "post-coloring-proofs",
        
          title: "Coloring proofs",
        
        description: "Coloring proofs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/ColoringProofs/";
          
        },
      },{id: "post-warm-up",
        
          title: "Warm Up",
        
        description: "Warm up problems on Combinatorics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/WarmUpCombi/";
          
        },
      },{id: "post-outreach-program-iiser-bhopal-08-may-2024",
        
          title: "Outreach program, IISER Bhopal, 08 May, 2024",
        
        description: "Outreach program, IISER Bhopal, 08 May, 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2024/OutreachIISERB24May/";
          
        },
      },{id: "post-test-template",
        
          title: "test template",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mop/blog/2023/F/";
          
        },
      },{id: "news-mathematics-olympiad-problem-solving-sessions-mopss-will-be-organized-at-iiser-bhopal-please-visit-this-page-for-the-details",
          title: 'Mathematics Olympiad Problem Solving Sessions (MOPSS) will be organized at IISER Bhopal. Please...',
          description: "",
          section: "News",},{id: "news-the-deadline-for-submitting-application-for-mopss-has-been-extended-to-21st-july-2024-the-students-enrolled-in-the-11th-or-12th-standard-may-write-to-jyoti-prakash-saha-jpsaha-iiserb-ac-in-if-they-would-like-to-participate-in-mopss",
          title: 'The deadline for submitting application for MOPSS has been extended to 21st July,...',
          description: "",
          section: "News",},{id: "news-mathematics-olympiad-problem-solving-sessions-mopss-will-be-held-during-9-00am-to-12-00pm-at-iiser-bhopal-in-person-offline-classroom-meetings-on-the-following-dates-5th-july-19th-july-2025-9th-23rd-august-2025-27th-september-2025-11th-25th-october-2025-22nd-november-2025-please-visit-this-page-for-the-details",
          title: 'Mathematics Olympiad Problem Solving Sessions (MOPSS) will be held during 9:00am to 12:00pm...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/mop/projects/9_project/";
            },},{
        id: 'social-discord',
        title: 'Discord Server',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.gg/55adEhUWdK", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%70%73%61%68%61@%69%69%73%65%72%62.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jpsaha", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jpsaha", "_blank");
        },
      },{
        id: 'social-mathstodon',
        title: 'Mathstodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mathstodon.xyz/@jpsaha", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/mop/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
