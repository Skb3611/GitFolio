export * from "lucide-react";
import {
  CalendarIcon,
  Facebook,
  Instagram,
  Link,
  MailIcon,
  Infinity,
  Globe,
  icons,
} from "lucide-react";
import React from "react";
type IconProps = React.HTMLAttributes<SVGElement>;

const SKILL_PATTERNS = {
  // Remove these suffixes automatically
  suffixesToRemove: [
    "js",
    "lang",
    "language",
    "framework",
    "library",
    "programming",
    ".js",
    ".ts",
    ".py",
    ".java",
    ".rs",
    ".go",
    ".php",
    ".rb",
  ],

  // Common variations that should be treated as equivalent
  equivalents: {
    x: "twitter",
    gh: "github",
    ig: "instagram",
    fb: "facebook",
    yt: "youtube",
    js: "javascript",
    ts: "typescript",
    py: "python",
    node: "node.js",
    aws: "aws",
  },

  // Handle domain extensions
  domainMappings: {
    "github.com": "github",
    "twitter.com": "twitter",
    "linkedin.com": "linkedin",
    "instagram.com": "instagram",
    "facebook.com": "facebook",
    "youtube.com": "youtube",
    "behance.net": "behance",
  },
};
export function findIcon(skillName: string): keyof typeof Icons | null {
  if (!skillName?.trim()) return null;

  const availableIcons = Object.keys(Icons) as (keyof typeof Icons)[];
  const input = skillName.toLowerCase().trim();

  // 1. Direct exact match
  if (availableIcons.includes(input as keyof typeof Icons)) {
    return input as keyof typeof Icons;
  }

  // 2. Check domain mappings
  if (
    SKILL_PATTERNS.domainMappings[
      input as keyof typeof SKILL_PATTERNS.domainMappings
    ]
  ) {
    const mapped =
      SKILL_PATTERNS.domainMappings[
        input as keyof typeof SKILL_PATTERNS.domainMappings
      ];
    if (availableIcons.includes(mapped as keyof typeof Icons)) {
      return mapped as keyof typeof Icons;
    }
  }

  // 3. Check equivalents
  if (
    SKILL_PATTERNS.equivalents[input as keyof typeof SKILL_PATTERNS.equivalents]
  ) {
    const equivalent =
      SKILL_PATTERNS.equivalents[
        input as keyof typeof SKILL_PATTERNS.equivalents
      ];
    if (availableIcons.includes(equivalent as keyof typeof Icons)) {
      return equivalent as keyof typeof Icons;
    }
  }

  // 4. Try removing common suffixes
  for (const suffix of SKILL_PATTERNS.suffixesToRemove) {
    const withoutSuffix = input.replace(new RegExp(`${suffix}$`, "i"), "");
    if (
      withoutSuffix &&
      availableIcons.includes(withoutSuffix as keyof typeof Icons)
    ) {
      return withoutSuffix as keyof typeof Icons;
    }
  }

  // 5. Try partial matching - check if input contains any icon name
  const partialMatch = availableIcons.find((iconKey) => {
    const iconName = iconKey.toString();
    return input.includes(iconName) || iconName.includes(input);
  });

  return partialMatch || null;
}

/**
 * Get icon component safely
 */
export function getIconComponent(skillName: string) {
  const iconKey = findIcon(skillName);
  return iconKey ? Icons[iconKey] : null;
}

/**
 * Check if skill has an icon
 */
export function hasIcon(skillName: string): boolean {
  return findIcon(skillName) !== null;
}

/**
 * Get all available icons for reference
 */
export function getAvailableIcons(): string[] {
  return Object.keys(Icons);
}

export const Icons = {
  peerlist: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 0C2.667 0 0 2.667 0 12s2.673 12 12 12s12-2.667 12-12S21.327 0 12 0m8.892 20.894c-1.57 1.569-4.247 2.249-8.892 2.249s-7.322-.68-8.892-2.25C1.735 19.522 1.041 17.3.89 13.654A40 40 0 0 1 .857 12c0-1.162.043-2.201.13-3.13c.177-1.859.537-3.278 1.106-4.366c.284-.544.62-1.006 1.013-1.398s.854-.729 1.398-1.013C5.592 1.524 7.01 1.164 8.87.988C9.799.9 10.838.858 12 .858c4.645 0 7.322.68 8.892 2.248s2.25 4.246 2.25 8.894s-.681 7.325-2.25 8.894M20.538 3.46C19.064 1.986 16.51 1.357 12 1.357c-4.513 0-7.067.629-8.54 2.103C1.986 4.933 1.357 7.487 1.357 12c0 4.511.63 7.065 2.105 8.54C4.936 22.014 7.49 22.643 12 22.643s7.064-.629 8.538-2.103s2.105-4.029 2.105-8.54s-.63-7.065-2.105-8.54M14.25 16.49a6.1 6.1 0 0 1-2.442.59v2.706H10.45v.357H6.429V5.57h.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262c0 2.852-1.981 5.26-4.68 6.013zm-1.788-8.728H10.45v5.428h2.011c1.532 0 2.802-1.2 2.802-2.714s-1.27-2.714-2.802-2.714zm.901 4.351c.117-.239.186-.502.186-.78c0-1.01-.855-1.857-1.945-1.857h-.296V8.62h1.154c1.09 0 1.945.847 1.945 1.857c0 .705-.422 1.323-1.044 1.637zm4.104 1.493q.064-.096.123-.194a5.7 5.7 0 0 0 .526-1.103a6 6 0 0 0 .11-.362q.032-.113.06-.227a6 6 0 0 0 .073-.41c.01-.068.025-.134.032-.203q.037-.31.038-.63c0-3.198-2.687-5.763-5.967-5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747-.488 3.778-1.303a6 6 0 0 0 .46-.406l.1-.105q.16-.163.308-.337q.064-.08.126-.162q.123-.156.233-.319m-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905-5.11 4.905z"
      ></path>
    </svg>
  ),
  behance: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M420.3 470.3c8.7-6.3 12.9-16.7 12.9-31c.3-6.8-1.1-13.5-4.1-19.6c-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5m11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1a50.5 50.5 0 0 0 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6c3-5.8 4.5-13.2 4.5-22.1c0-17.7-5-30.2-14.9-37.8M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m86.5 286.9h138.4v33.7H598.5zM512 628.8a89.5 89.5 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3c13.4 2.8 24.8 7.6 34.4 14.1c9.5 6.5 17 15.2 22.3 26c5.2 10.7 7.9 24.1 7.9 40c0 17.2-3.9 31.4-11.7 42.9c-7.9 11.5-19.3 20.8-34.8 28.1c21.1 6 36.6 16.7 46.8 31.7c10.4 15.2 15.5 33.4 15.5 54.8c0 17.4-3.3 32.3-10 44.8M790.8 576H612.4c0 19.4 6.7 38 16.8 48c10.2 9.9 24.8 14.9 43.9 14.9c13.8 0 25.5-3.5 35.5-10.4c9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7c-19.6 12.8-43.6 19.2-71.5 19.2c-19.5 0-37-3.2-52.7-9.3c-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6c0-18.5 3.1-35.7 9.1-51.7c11.5-31.1 35.4-56 65.9-68.9c16.3-6.8 33.8-10.2 51.5-10c21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9c4.3 17.3 5.8 35.5 4.6 54.7m-122-95.6c-10.8 0-19.9 1.9-26.9 5.6s-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1c-8.4-8.9-21.9-13.7-38.6-13.7"
      ></path>
    </svg>
  ),
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  facebook: (props: IconProps) => <Facebook {...props} />,
  website: (props: IconProps) => <Globe {...props} />,
  link: (props: IconProps) => <Link {...props} />,
  instagram: (props: IconProps) => <Instagram {...props} />,
  reddit: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1792 1792"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1095 1167q16 16 0 31q-62 62-199 62t-199-62q-16-15 0-31q6-6 15-6t15 6q48 49 169 49q120 0 169-49q6-6 15-6t15 6M788 986q0 37-26 63t-63 26t-63.5-26t-26.5-63q0-38 26.5-64t63.5-26t63 26.5t26 63.5m395 0q0 37-26.5 63t-63.5 26t-63-26t-26-63t26-63.5t63-26.5t63.5 26t26.5 64m251-120q0-49-35-84t-85-35t-86 36q-130-90-311-96l63-283l200 45q0 37 26 63t63 26t63.5-26.5T1359 448t-26.5-63.5T1269 358q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97q-35-37-87-37q-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56q0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57q30-15 48-43.5t18-63.5m358 30q0 182-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348"
      ></path>
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.99 6.547a11 11 0 0 0-.103-1.282a4.3 4.3 0 0 0-.363-1.09A3.85 3.85 0 0 0 19.83 2.48a4.3 4.3 0 0 0-1.083-.362a11 11 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a11 11 0 0 0-1.282.103a4.3 4.3 0 0 0-1.09.363A3.85 3.85 0 0 0 2.48 4.17a4.3 4.3 0 0 0-.362 1.083a11 11 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a11 11 0 0 0 .103 1.282a4.3 4.3 0 0 0 .363 1.09A3.85 3.85 0 0 0 4.17 21.52a4.3 4.3 0 0 0 1.083.362a11 11 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a11 11 0 0 0 1.282-.103a4.3 4.3 0 0 0 1.09-.363a3.85 3.85 0 0 0 1.696-1.694a4.3 4.3 0 0 0 .362-1.083a11 11 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53m-9.773 12.41h-.003a7.1 7.1 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57"
      ></path>
      <path
        fill="currentColor"
        d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.9 5.9 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.83 1.83 0 0 1-1.202.847a2.44 2.44 0 0 1-1.122-.07a10 10 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.46 3.46 0 0 1-.728-1.842a2 2 0 0 1 .624-1.485a.66.66 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.33.33 0 0 1 .015.312a1.2 1.2 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.4 5.4 0 0 0 .991 1.234a4.9 4.9 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.5 1.5 0 0 1-.104.847"
      ></path>
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60" />
        <path
          fill="url(#skillIconsTailwindcssLight0)"
          fillRule="evenodd"
          d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="skillIconsTailwindcssLight0"
            x1="86.5"
            x2="163.5"
            y1="74"
            y2="185.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32B1C1" />
            <stop offset="1" stopColor="#14C6B7" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  motion: (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1em"
        height="1em"
        viewBox="0 0 140 140"
        {...props}
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAQAElEQVR4AexcTawlRRWu6pkgAzMMgxtIUMNs5M2AYNy4cBjEFSsTTTTBjStxpQETTIbFDAvGSOIQXYErN5K40MTVrMSHs3Gjovy6gWiM4AIGnDc8JMMtz6n+q+6u/zrV3bfvfenqrq6qc853vvNV3/vu3HkFy/wj9r/w6dWVe74hrt71pLh68tdib+fPYu/kv6F9AG0FTdC0E0R+ToIfX1/ddas9tM3ekDPkDjgELpFT5BY5Bq4zl5NlEYy4snOf2DvxE3HlrlfZxx/+g/Nrv2JCnGGCfY2x4vOQ1G3QDkHj0IgOQlcMfQmA64KG69o13bt2nLiHYZA74BC4RE6RW+QYuEbOS+537iOOK92RCUa8e/yo+O/djyFgxosXGOOPMi522Nr+cCmbtYMvOUfuixewFrIm7x4/SpVHIxge6VEKBR6J7LpDb7Fi9eO1Ekls0gauhGF8smEUD9YEaiPfEhAIpxFMTLLiyonvgVDelC83jOFjcjJuogLHJG0JRKw/S6TgqUOyRtcdelPWLNi8NWgE0w65e2Lvs59b7d39O8b5T2H1MWhhx4yZDUuEeHV+Xo5hzQTUDmsYgz5YMOLKnd9h7OCLnK0eiAkobYh3tvS5hNNovGDtDr5Y1jKMuCJkOb77ZvzAs2CTfy9AEPXY9skZ4FhLWdMA196CEXsnf8nwNx+2/WkZGO2R0IYk7/FHy9r6OfYSDH7gBu4egrbBh04cPC8fmd0r4B+qaqwM6btOwUj14YdDevsNGh2veg2pOo02k8QdqLGstcOtVTACPq0F+/k8WSaoGeS/ScdDVc2NORsFU76Dhk8MjaYTTETvuGjDCZKcOiS8p5G/CfdwVJtVKxj5O3px4JmeCd1tFZzOocvT6AFdgPLMU6XJDzwjNaCirPacVjCMXfc0/MtbVPjKrxpq2PdaNDRbi5EpQdLxCrUHDWhyGQim/OgYP9jRrPYYgkgeq7ZL5s0AKm/1QKmFLtKOYPAfEuGj43PdJdu7RTHgtaOrRZyfk5pQCOgIhn3ihsdg7hi0hRy4UxaSClUaYZQcqzTRRG8EIy4fPwr/ovlIM7OITrVTFpFLniSc+hHiEfUp0wiGHbjxYYC0fl9RANA0h5M6mjAjeAnJxGNLHWIHpTYk8lYwXHxbjmzsyYM6BzfCMT/WdHomPaSKNqRgxJWd+3J+U24uRPZoIL+lKtQ4fAWkz1c7UiNgIgUDvxl9FfrZDioiswGcmeP58QWIOJcaKQUjigdnxtkWztwYqDRS4P8byvlyZMwbRFvP2R/B9tnax/aamQEudlArBbt27YuZQ+ndKzpQtKNZa5/VGNiHiN3Zgy1sFrRSsOLjexaWlj0dRaj2hdvZAQOgFXgPI+4cTCxloHqarItG5o9T3FkwsbojSR9VUZJ8WIyTSKyMM0O0oA+bmj1O0Ao8YYpbw9Lqra6K0hu13IZN2Ug0hzbPhEXfru4yUNwKgmE3szX9MYvJPLOmqRLCTtpMN6NgridEE+5qW9twzjwszLJIIvx6FEySBw/s9iXmzOx221krA2RF7TriKBhr4KVM5tJlLr9m3keOCOHgaODMVzBdZTeAYzvE7hoYufw2AQadESL2Qqi3Q8GoswOwIw6osg4Mm2AaGKldnjsm+sfWRszYswQaCsayOCNEUtdEmg/CxFle4jAnbEGgMiweCiZDEC+Xc2CjARpT/BklkBHKfAQzqNFgoCmnqxNvWXvOyHgdIuc1nQAjOk/BZERghBZftHhLI5isE1OwG5MQ4vQUzDglQEAxiVDbJOMIpCtweVS6yTlBVMTpKRhYPcKBgOowFAnWvkKvKo5QW7l+SvASwPCUnFPlclaCqTDJC1WC0lnCaYa1T8imMrWSa894toKpUpv8YuV2cnQlgOCzVRP2jKMFY40ZnAGhgT1fxlzzbPtjYgBrHi2Y2fKOWZkyxnHXPK7ZsOZLCda8Kxgc2TCytumyoIduVzC+UmPbn1gG1p3irmBiWdjaeTMw9UM8VbCLF0wqQd5KWJOFqYKNEAxFCbo+une0zKcSRIum740mcxovfWz6+wjBtCXQu/QZ7fro3vnYL2WNI3PHdM2C57J6edI1QjBJ8UiMdy/ts3Pn32H3P/gv2fjhV5irqYHR1rXeNY8+ap/Yd633ma/9NVfl0YE5q/liH+Nia9aP0FkrwdSkffnBN9gT599mL1x6XzYXT2fPtP/1CglGW5eNa/7cmU82Syj8qRgbx9DBnFFsmLOaL/YxLjbMCZaOchgFo4h7FCBtkGFkJA13VE1au9avl7O4VMVSMdZZoW/Mub43XVE0KCrkybSGEX0jsBVM74Wwd2vGQT7TjYwkIGm4o2JCqTv33I/eiXExsFGLi8UaLAgcUDHWpiiWUN9oU9sPr11eh/N+I61ghhvbzwPBKlNoJADFkhKiU9wn305xJW3V4iI+OZhQC/SnYpT+4BQqFjCRL88NJhzI0FrBJDs3ld3tWMc3Jh5DWhMNnGIx6nv0V/dTrk1xwX+DLz51LZQUrIgJn8paxwSDhIIBBgkAoQtMGBPHfmw7/aWjrCkuOEn1By5YR4BPpr+8nX381g5GjIGNAiv6ydEIBUMHL2WH1SjuP9X+yWEKf6dP0QuQ6H1onXJzpci3cdbrJAuG+GksP18JfYPbf7bhk4D66ZIqQBfGui74dK37c7wmC6ZPRGqSMY9jm2gpdhuFAPsYVUGncjamfbJgKMFOU9wwyVNhNPGmPslY0DdVWPPT9dEMk3RmJZiYp0ufhftP3dAM+RVX2fsa7QQ9XTT2DRil43q64PulcrmCrRyY/Dy+YAyklsU1THrShMU9rbzZdQuwF09TnyABauz70BFjfwzvPUxxmVdTMXsZBCwaXzAGZsriGiY9E8KdW0ugFKDL0B4Pi1s/3tFfidHl0z6PGHUrStzlzO7F28tOxFnFLM1Vx3Ig7TS+YDR4sRiaYc2QOXskSjXIWVw1Tki/j9FmG7JW9TMQpH1PqKZe/UyC8UeJYvEvrtmvShT69MreskgtGPrzx2h2qmI0rypncK2KoRy1n39/8bh9AcFsJsGYnwQEmAcuVGKnKO4AkGZAxaiZ1g75igbfJIu9k6x++dQ6IxrUCEazizPVfx2K643RwREWP6ZmaIdiQMFhQ3GgH7ziPT5VYt7zaKqMbp1NIxhN5rHeneHTF5w9c1vjxLu4jYW+g0WqZ7xfiiwcnVW+wFX7Db0iJmwoDhQQXvE+9qmiqbIXJI1gvOySF9EV95ZkLKoDtbiIsZ6LJRjtsbB4XUKbTDDeO9fCcr+4FD7V4qr+LA+QDsK+sFSMnYWkN3p0+tG0wJVg0pyEWqs7N9RWXW8qrrpm0O9XVFmgFjcWY79IKkYlFHFXn5R+NC30JIJRd24sfFNxnST1K6oAUIv7xPn/KDNxXRVjnIf5WY0umNid26euW9z2q5cWPVQu9JJSi1tidHuqHGov6E/FqF20hoMOwaSRpuODeueWxdVFMo3pc1KL+8T5VoAmL5s67hCMfjfGklUWV18wX5/9nUtRXPRZxy8x1ndxV/SnCjDOyzytHIKhBU1RXBVRjuKSYqTdb2rq9n7GuKMJZvbFhRKQY0x7mAKiyCNXXBDiaIIh2rkNg+TFBc8UGJf6UgT0yP88OYpg5lpcSUJ1osJYuYu7wA6OMxzPahTBUO9cquLWTwP8pn4qRpI3urleSgj1lF0wVMVVc66Lm7Iha7Gg391LH+AlupGIJTp6zzCFlJ4r3a2HYNJkXxdXF9x3TC2uKsBYZFjgOjb6S8GIvlR8td/B1VjI2CwGEcoBYnel0/bsIRhjpq0XQw+LYZjyHsaC1It3L+3LvwtT38devQrscI7fR8Hvonj7MhYynl8HxCzTHoKJi4tiSdm5dVS1ILvKS0dLc9urbWxXVYAtRn8ftVDw+yix30Wx4Zv7XDbB2BP3K5C+uKXndsO2vXLGfi4FWNq0gi7vdZanT93ETp86yhALPlF8hdLx5ZduxyTHjTlL/2jZBIOFwW+G6dsJph8/2RlHH3Uq2Jc2V7tr5Ngejvn5LP2VFWxt0V7fdi9+iu1evF3+lYXoJ0pSpZKMy3Src5l1dRN5ySaYSDxuMyN/FHS4w4+/Yl55rZ9gxq+YEtGoVmXNsruKYOZBRi4UNH7ntdunkKYimCEZNCSHpTVEEWZvWp3LryneUscVwQxT3GiSJ0h+ig06rLp9xCoYu2me2dmQRgaEzFEewgO9jiOYgN0asDQw1amW+2fkv3KqXBgbRzDL2mTTVcsUmZsm6Mc7gslTV1H9scg83ukpWUOPI1LbEYyXUL0WqaTz6i+1cXVwGf2AlEasacVtnogdwVSR7Jc8OOwxg2dHAhkQJkBbwdnqDfJEDBeMHt3MRvOQNbMkJ4GzMMFUW36d9TJz7NMJRu6PqsCyT3Gq2KZ2SwjN6WqO2BXQEwumKrACaP26nhX2XDb3/CcWzNzpAXxOTTsXgJPlHFvBuGq5kCeDK03feX/BbNZG8uVv49b5C2aMnTayKMdIaTpF5ckOBZPHcwxTFZLqEuPB06aM4K/Pcr2n88BluXz7ZxcAWKBgPgwwGGVpllQ7yEMioGHoerTxbTl9+2LwXvchCuY97+XbhQkM5HqSmCFliPgeCGYV9Pe5MoAwZxwyY9yoc0FsBBiSZdBav4gh/KzeLhgv3gxB4QcixGPi2hqQMe96QWKcxZoH8ANaKRjjrzPLj7EOFpvOVACejp3zpkJWXZzLtwsIGOCvF2x14K82T8n1zlbQZGS2tBc3R1IG0ErBDh78I9v+LJ4Bku0FWin4oT/9kwn+2uIZYyR7bDKaPNCnY7OpCjSCWoH3MBCHry7CeTZHHDkuKxsbs0ndCIQUvcmZjcJKI6VghPitba0xi0wTpnzs4fRWc8rLjn/E2RhSQCOIUAqGH3ntDxweOTgwj1ZmVJ7TEOlllOZz46xBG6gRzFsKBjtM8F/I6xQn3g9aDpTn/tz2PpaB6A2oaKMVzLWrzwKQfWj0h6vy0ZnQQ0WPM4ODkHotDqG1DObJfVZqQ2JoBMNveeN9xvnTcpT6FJRf0GJqpNKfmTs57XHKnUM6wkESJsigCamNyqARjLz/3wdPwfUytAmPDGSMns0ScpCkXWalJuQNnjqCkUoS4hxOBLTt0rVnQOgzAC1ITSizHcHgOD/y6s8YK57H/rZtCgNck2jxfKmF7tRAMOX0R4/A1SA7mNn0Q8fvsjiB2ksNDLLSCoYf/vvfmPj4u4PViQOAItHDTMwXk4iBT6i91IBmWisYXMePvP5zxsQF7HdbPFtrtTHXCmy3Qs1dVA7iQiFr33jpdIyCwVX88Ks/gOtz0JQjCoVivybd+H3RS5DMUc+vx2146Oew5jYzq2AQEj/8yrcYZ7/BflSbWl9TxwfyonirjcbCDzWWta7jGq5OwaAdv/GVr8O196SBEZ/DJlcf+9Q1SvxUV2PZdyB3brIheK6qsTOAl2DQS6k+khR7DwAAAUlJREFU3XsanN02Sgb4WE8VCVpcKGsrb5wnb8GgJ3x9g9+eHob+OLqHQBt5jMOuwFrKmgaQHCQY9Fv+9nTtXjbmh3scI29Oy6+XAj6YvXZvWcswXoMFg+7xd3R++KWvMCG+D/f5/+0pP4OQxnyOjPvjMtYMa4c1jMk4SjB1IPnR8Uf7dzDOz8NYnq9GgOPtkczAvqwR1ErWLMFdkmAwLv7jFL/x5cfZR/u3sVXxQyaW+oXyNXzMYS2wJlAbrBHWCmuW0jwF435IIhh+00tP8SMvn2BidVp+SoyAU9B52vqU0meNPZybA7t9wGzKUsm5uIA1wFrImuB3nVJ8Kraeggmjm+N3hOFTYgTMDlz/GSYOflM+EuHDIcZWf4H4b0Hbh9Y4bjowGHr4lNJnTWjcidYjVcgdcAhcIqf4lgA5Bq6Rc/zNB2uQA9//AQAA//9UjhtEAAAABklEQVQDAC/oDKidejHIAAAAAElFTkSuQmCC"
          x="0"
          y="0"
          width="140"
          height="140"
        />
      </svg>
    );
  },
  react: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"></path>
      </g>
    </svg>
  ),
  vue: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
      ></path>
      <path
        fill="#35495e"
        d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"
      ></path>
      <path
        fill="#41b883"
        d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"
      ></path>
    </svg>
  ),
  angular: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#DD0031"
        d="m64 15.36l-47.668 17l7.27 63.027L64 117.762l40.398-22.375l7.27-63.028Zm0 0"
      ></path>
      <path
        fill="#C3002F"
        d="M64 15.36v11.367v-.051v91.086l40.398-22.375l7.27-63.028Zm0 0"
      ></path>
      <path
        fill="#FFF"
        d="M64 26.676L34.203 93.492h11.11L51.3 78.54h25.293l5.992 14.953h11.11Zm8.703 42.648H55.297L64 48.383Zm0 0"
      ></path>
    </svg>
  ),
  typescript: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  ),
  javascript: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237z"
      ></path>
    </svg>
  ),
  node: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="url(#deviconNodejs0)"
        d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
      ></path>
      <path
        fill="url(#deviconNodejs1)"
        d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"
      ></path>
      <path
        fill="url(#deviconNodejs2)"
        d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
      ></path>
      <defs>
        <linearGradient
          id="deviconNodejs0"
          x1="34.513"
          x2="27.157"
          y1="15.535"
          y2="30.448"
          gradientTransform="translate(-129.242 -73.715)scale(6.18523)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F873F"></stop>
          <stop offset=".33" stopColor="#3F8B3D"></stop>
          <stop offset=".637" stopColor="#3E9638"></stop>
          <stop offset=".934" stopColor="#3DA92E"></stop>
          <stop offset="1" stopColor="#3DAE2B"></stop>
        </linearGradient>
        <linearGradient
          id="deviconNodejs1"
          x1="30.009"
          x2="50.533"
          y1="23.359"
          y2="8.288"
          gradientTransform="translate(-129.242 -73.715)scale(6.18523)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".138" stopColor="#3F873F"></stop>
          <stop offset=".402" stopColor="#52A044"></stop>
          <stop offset=".713" stopColor="#64B749"></stop>
          <stop offset=".908" stopColor="#6ABF4B"></stop>
        </linearGradient>
        <linearGradient
          id="deviconNodejs2"
          x1="21.917"
          x2="40.555"
          y1="22.261"
          y2="22.261"
          gradientTransform="translate(-129.242 -73.715)scale(6.18523)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".092" stopColor="#6ABF4B"></stop>
          <stop offset=".287" stopColor="#64B749"></stop>
          <stop offset=".598" stopColor="#52A044"></stop>
          <stop offset=".862" stopColor="#3F873F"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  python: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60"></rect>
        <path
          fill="url(#skillIconsPythonDark0)"
          d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717"
        ></path>
        <path
          fill="url(#skillIconsPythonDark1)"
          d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716"
        ></path>
        <defs>
          <linearGradient
            id="skillIconsPythonDark0"
            x1="47.22"
            x2="146.333"
            y1="46.896"
            y2="145.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#387EB8"></stop>
            <stop offset="1" stopColor="#366994"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsPythonDark1"
            x1="108.056"
            x2="214.492"
            y1="109.905"
            y2="210.522"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE052"></stop>
            <stop offset="1" stopColor="#FFC331"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  java: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#4E7896"
          d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z"
        ></path>
        <path
          fill="#F58219"
          d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.461 17.028-35.731 54.766z"
        ></path>
      </g>
    </svg>
  ),
  rust: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#E43717" rx="60"></rect>
        <path
          fill="#fff"
          d="m226.574 125.551l-8.39-5.198q-.107-1.227-.239-2.446l7.224-6.727a2.88 2.88 0 0 0 .864-2.676a2.87 2.87 0 0 0-1.821-2.14l-9.232-3.44c-.231-.799-.474-1.592-.722-2.389l5.753-7.988a2.88 2.88 0 0 0 .325-2.79a2.9 2.9 0 0 0-2.198-1.747l-9.729-1.583a72 72 0 0 0-1.17-2.178l4.091-8.982a2.89 2.89 0 0 0-.226-2.81a2.87 2.87 0 0 0-2.504-1.282l-9.881.344q-.765-.958-1.56-1.892l2.275-9.613a2.896 2.896 0 0 0-3.485-3.483l-9.613 2.274a83 83 0 0 0-1.896-1.56l.346-9.88c.038-1-.45-1.95-1.283-2.504a2.9 2.9 0 0 0-2.81-.227l-8.964 4.09q-1.086-.599-2.178-1.172l-1.587-9.727a2.87 2.87 0 0 0-1.747-2.198a2.88 2.88 0 0 0-2.79.325l-7.989 5.752a97 97 0 0 0-2.37-.72l-3.441-9.23a2.89 2.89 0 0 0-2.14-1.826a2.9 2.9 0 0 0-2.676.864l-6.728 7.224a87 87 0 0 0-2.446-.239l-5.199-8.409A2.9 2.9 0 0 0 127.972 28c-1.009 0-1.93.518-2.446 1.368l-5.199 8.41c-.818.066-1.636.148-2.446.238l-6.728-7.224a2.9 2.9 0 0 0-2.676-.864a2.88 2.88 0 0 0-2.141 1.825l-3.44 9.23c-.799.23-1.59.473-2.37.721l-7.99-5.752a2.87 2.87 0 0 0-2.79-.325A2.9 2.9 0 0 0 88 37.825l-1.586 9.727q-1.1.571-2.179 1.172l-8.964-4.09a2.893 2.893 0 0 0-4.092 2.731l.344 9.88a92 92 0 0 0-1.896 1.56l-9.614-2.274a2.91 2.91 0 0 0-2.714.77c-.71.709-1 1.731-.77 2.713l2.255 9.613a93 93 0 0 0-1.556 1.892l-9.88-.344a2.9 2.9 0 0 0-2.505 1.282a2.9 2.9 0 0 0-.227 2.81l4.09 8.982q-.599 1.08-1.172 2.178l-9.728 1.583a2.87 2.87 0 0 0-2.198 1.747a2.89 2.89 0 0 0 .325 2.79l5.753 7.988a82 82 0 0 0-.723 2.389l-9.231 3.44a2.89 2.89 0 0 0-1.822 2.14a2.89 2.89 0 0 0 .864 2.676l7.225 6.727q-.135 1.22-.239 2.446l-8.39 5.198a2.89 2.89 0 0 0-1.37 2.465c0 1.011.518 1.931 1.369 2.447l8.39 5.198q.105 1.228.239 2.446l-7.225 6.727a2.888 2.888 0 0 0 .958 4.816l9.231 3.44c.23.799.472 1.592.723 2.389l-5.753 7.988a2.886 2.886 0 0 0 1.892 4.537l9.729 1.582q.57 1.107 1.171 2.179l-4.09 8.963a2.892 2.892 0 0 0 2.731 4.091l9.862-.345a95 95 0 0 0 1.56 1.895l-2.255 9.613c-.23.975.06 1.988.77 2.695a2.89 2.89 0 0 0 2.714.768l9.614-2.255a78 78 0 0 0 1.896 1.556l-.344 9.88a2.88 2.88 0 0 0 1.282 2.503c.83.556 1.893.641 2.81.224l8.964-4.09q1.083.602 2.179 1.172l1.586 9.727c.16.99.822 1.827 1.747 2.217c.923.384 1.988.26 2.79-.323l7.99-5.752c.789.25 1.582.495 2.389.724l3.44 9.23a2.88 2.88 0 0 0 2.141 1.822a2.88 2.88 0 0 0 2.676-.864l6.728-7.224c.812.094 1.63.172 2.446.245l5.199 8.389a2.89 2.89 0 0 0 2.446 1.369c.992 0 1.931-.52 2.466-1.369l5.199-8.389a94 94 0 0 0 2.446-.245l6.728 7.224a2.88 2.88 0 0 0 2.676.864a2.87 2.87 0 0 0 2.14-1.822l3.441-9.23c.798-.229 1.592-.474 2.389-.724l7.989 5.752a2.885 2.885 0 0 0 4.537-1.894l1.587-9.727c.734-.381 1.46-.776 2.179-1.172l8.964 4.09a2.89 2.89 0 0 0 4.092-2.727l-.344-9.88a80 80 0 0 0 1.894-1.556l9.613 2.255a2.89 2.89 0 0 0 2.715-.768a2.87 2.87 0 0 0 .77-2.695l-2.256-9.613a76 76 0 0 0 1.556-1.895l9.882.345a2.87 2.87 0 0 0 2.503-1.282a2.88 2.88 0 0 0 .226-2.809l-4.09-8.963q.6-1.086 1.17-2.179l9.728-1.582a2.86 2.86 0 0 0 2.198-1.747a2.88 2.88 0 0 0-.325-2.79l-5.753-7.988c.249-.79.491-1.583.723-2.389l9.231-3.44a2.88 2.88 0 0 0 1.822-2.141a2.88 2.88 0 0 0-.864-2.675l-7.225-6.727q.132-1.22.239-2.446l8.391-5.198a2.88 2.88 0 0 0 1.368-2.447c0-.991-.516-1.93-1.367-2.465zm-56.192 69.755c-3.211-.692-5.237-3.861-4.549-7.071a5.94 5.94 0 0 1 7.053-4.568c3.211.686 5.256 3.86 4.568 7.071a5.94 5.94 0 0 1-7.053 4.568zm-2.848-19.302c-2.924-.627-5.81 1.234-6.422 4.166l-2.981 13.912c-9.194 4.167-19.496 6.498-30.199 6.498c-11.009 0-21.406-2.427-30.772-6.784l-2.981-13.913c-.627-2.924-3.498-4.797-6.422-4.166l-12.29 2.637a74 74 0 0 1-6.346-7.491h59.824c.677 0 1.128-.122 1.128-.738v-21.213c0-.615-.451-.737-1.128-.737h-17.488v-13.397h18.902c1.726 0 9.232.493 11.621 10.09c.751 2.943 2.408 12.537 3.536 15.614c1.124 3.44 5.696 10.32 10.57 10.32h29.816c.338 0 .699-.039 1.08-.107a75 75 0 0 1-6.766 7.95l-12.577-2.695zm-82.759 19.015a5.933 5.933 0 0 1-7.053-4.568c-.686-3.21 1.354-6.383 4.568-7.071a5.94 5.94 0 0 1 7.053 4.568c.686 3.211-1.355 6.383-4.568 7.071m-22.744-91.923a5.96 5.96 0 0 1-3.02 7.854a5.94 5.94 0 0 1-7.837-3.019c-1.337-2.997.023-6.517 3.02-7.855a5.94 5.94 0 0 1 7.837 3.02m-6.977 16.512l12.806-5.695c2.733-1.214 3.976-4.415 2.752-7.148l-2.637-5.962h10.359v46.63H57.501a73.3 73.3 0 0 1-2.79-20.066a74 74 0 0 1 .418-7.855zm56.193-4.53v-13.759h24.655c1.275 0 9.002 1.473 9.002 7.243c0 4.796-5.925 6.516-10.798 6.516H111.17zm89.639 12.384c0 1.827-.067 3.631-.2 5.428h-7.512c-.751 0-1.053.493-1.053 1.228v3.44c0 8.103-4.568 9.881-8.582 10.32c-3.822.43-8.046-1.597-8.562-3.937c-2.256-12.67-6.002-15.365-11.927-20.066c7.359-4.663 15.004-11.562 15.004-20.831c0-9.956-6.823-16.225-11.468-19.302c-6.536-4.3-13.761-5.16-15.711-5.16H73.277c10.53-11.733 24.847-20.066 40.901-23.124l9.156 9.594a5.415 5.415 0 0 0 7.664.176l10.244-9.785c21.407 3.994 39.564 17.334 50.076 35.737l-7.014 15.824c-1.21 2.733.025 5.944 2.752 7.148l13.494 6c.233 2.389.355 4.816.355 7.262zm-77.598-80.074a5.923 5.923 0 0 1 8.39.193a5.96 5.96 0 0 1-.197 8.409a5.92 5.92 0 0 1-8.39-.195a5.96 5.96 0 0 1 .197-8.409zm69.571 55.995a5.927 5.927 0 0 1 7.836-3.02a5.95 5.95 0 0 1 3.02 7.855a5.93 5.93 0 0 1-7.836 3.019a5.95 5.95 0 0 1-3.02-7.854"
        ></path>
      </g>
    </svg>
  ),
  aws: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#252F3E"
          d="M84.745 111.961c0 2.434.263 4.407.723 5.855a35 35 0 0 0 2.106 4.737c.329.526.46 1.052.46 1.513c0 .658-.395 1.316-1.25 1.973l-4.145 2.764c-.592.394-1.184.592-1.71.592c-.658 0-1.316-.329-1.974-.921a20.4 20.4 0 0 1-2.368-3.092a51 51 0 0 1-2.04-3.882q-7.697 9.08-19.342 9.079c-5.526 0-9.934-1.579-13.158-4.737c-3.223-3.158-4.868-7.368-4.868-12.631c0-5.593 1.974-10.132 5.987-13.553s9.342-5.132 16.118-5.132c2.237 0 4.54.198 6.974.527s4.934.855 7.566 1.447v-4.803c0-5-1.053-8.487-3.092-10.526c-2.106-2.04-5.658-3.026-10.724-3.026c-2.303 0-4.671.263-7.105.855s-4.803 1.316-7.106 2.237a19 19 0 0 1-2.302.855c-.46.132-.79.198-1.053.198c-.92 0-1.382-.658-1.382-2.04v-3.224c0-1.052.132-1.842.461-2.302s.921-.921 1.842-1.382q3.454-1.776 8.29-2.96c3.223-.856 6.644-1.25 10.263-1.25c7.829 0 13.552 1.776 17.237 5.328c3.618 3.553 5.46 8.948 5.46 16.185v21.316zm-26.71 10c2.17 0 4.407-.395 6.776-1.185c2.368-.789 4.473-2.237 6.25-4.21c1.052-1.25 1.842-2.632 2.236-4.211s.658-3.487.658-5.723v-2.764a55 55 0 0 0-6.052-1.118a50 50 0 0 0-6.185-.395c-4.408 0-7.631.856-9.802 2.632s-3.224 4.276-3.224 7.566c0 3.092.79 5.394 2.434 6.973c1.58 1.645 3.882 2.435 6.908 2.435m52.828 7.105c-1.184 0-1.974-.198-2.5-.658c-.526-.395-.987-1.316-1.381-2.566l-15.46-50.855c-.396-1.316-.593-2.171-.593-2.632c0-1.052.526-1.645 1.579-1.645h6.447c1.25 0 2.106.198 2.566.658c.526.395.921 1.316 1.316 2.566l11.052 43.553l10.264-43.553c.329-1.316.723-2.17 1.25-2.566c.526-.394 1.447-.657 2.631-.657h5.263c1.25 0 2.106.197 2.632.657c.526.395.987 1.316 1.25 2.566l10.395 44.079l11.381-44.079c.395-1.316.856-2.17 1.316-2.566c.526-.394 1.382-.657 2.566-.657h6.118c1.053 0 1.645.526 1.645 1.644c0 .33-.066.658-.132 1.053c-.065.395-.197.92-.46 1.645l-15.855 50.855q-.593 1.974-1.382 2.566c-.526.394-1.382.658-2.5.658h-5.658c-1.25 0-2.105-.198-2.631-.658c-.527-.461-.987-1.316-1.25-2.632l-10.198-42.434l-10.131 42.368c-.329 1.316-.724 2.171-1.25 2.632c-.527.46-1.448.658-2.632.658zm84.54 1.776c-3.421 0-6.842-.395-10.132-1.184c-3.289-.79-5.855-1.645-7.566-2.632c-1.052-.592-1.776-1.25-2.039-1.842a4.65 4.65 0 0 1-.395-1.842v-3.355c0-1.382.526-2.04 1.513-2.04q.593 0 1.184.198c.395.131.987.394 1.645.658a35.8 35.8 0 0 0 7.237 2.302a39.5 39.5 0 0 0 7.829.79c4.145 0 7.368-.724 9.605-2.171c2.237-1.448 3.421-3.553 3.421-6.25c0-1.842-.592-3.356-1.776-4.606s-3.421-2.368-6.645-3.421l-9.539-2.96c-4.803-1.513-8.356-3.75-10.527-6.71c-2.171-2.895-3.289-6.12-3.289-9.54q0-4.144 1.776-7.303c1.184-2.105 2.763-3.947 4.737-5.394c1.974-1.514 4.211-2.632 6.842-3.422c2.632-.79 5.395-1.118 8.29-1.118c1.447 0 2.96.066 4.408.263c1.513.197 2.894.46 4.276.724c1.316.329 2.566.658 3.75 1.053q1.776.591 2.763 1.184c.921.526 1.579 1.052 1.974 1.644q.592.79.592 2.172v3.092c0 1.381-.526 2.105-1.513 2.105c-.527 0-1.382-.263-2.5-.79q-5.625-2.565-12.632-2.565c-3.75 0-6.71.592-8.75 1.842s-3.092 3.158-3.092 5.855c0 1.842.658 3.421 1.974 4.671s3.75 2.5 7.237 3.618l9.342 2.96c4.736 1.514 8.158 3.619 10.197 6.317s3.026 5.789 3.026 9.21c0 2.829-.592 5.395-1.71 7.632c-1.184 2.237-2.763 4.21-4.803 5.789c-2.039 1.645-4.474 2.829-7.302 3.685c-2.961.921-6.053 1.381-9.408 1.381"
        ></path>
        <path
          fill="#F90"
          fillRule="evenodd"
          d="M207.837 162.816c-21.645 15.987-53.092 24.474-80.132 24.474c-37.894 0-72.04-14.014-97.829-37.303c-2.04-1.842-.197-4.342 2.237-2.895c27.895 16.184 62.303 25.987 97.895 25.987c24.013 0 50.395-5 74.671-15.263c3.618-1.645 6.71 2.368 3.158 5"
          clipRule="evenodd"
        ></path>
        <path
          fill="#F90"
          fillRule="evenodd"
          d="M216.85 152.553c-2.763-3.553-18.289-1.711-25.329-.856c-2.105.264-2.434-1.579-.526-2.96c12.368-8.684 32.697-6.184 35.066-3.29c2.368 2.961-.658 23.29-12.237 33.027c-1.777 1.513-3.487.723-2.698-1.25c2.632-6.513 8.487-21.185 5.724-24.671"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  azure: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="deviconAzure0"
          x1="60.919"
          x2="18.667"
          y1="9.602"
          y2="134.423"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#114A8B"></stop>
          <stop offset="1" stopColor="#0669BC"></stop>
        </linearGradient>
        <linearGradient
          id="deviconAzure1"
          x1="74.117"
          x2="64.344"
          y1="67.772"
          y2="71.076"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity=".3"></stop>
          <stop offset=".071" stopOpacity=".2"></stop>
          <stop offset=".321" stopOpacity=".1"></stop>
          <stop offset=".623" stopOpacity=".05"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="deviconAzure2"
          x1="68.742"
          x2="115.122"
          y1="5.961"
          y2="129.525"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CCBF4"></stop>
          <stop offset="1" stopColor="#2892DF"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#deviconAzure0)"
        d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 0 1-6.146 4.413H6.733a6.48 6.48 0 0 1-5.262-2.699a6.47 6.47 0 0 1-.876-5.848L39.944 4.414A6.49 6.49 0 0 1 46.09 0z"
        transform="translate(.587 4.468)scale(.91904)"
      ></path>
      <path
        fill="#0078d4"
        d="M97.28 81.607H37.987a2.743 2.743 0 0 0-1.874 4.751l38.1 35.562a6 6 0 0 0 4.087 1.61h33.574z"
      ></path>
      <path
        fill="url(#deviconAzure1)"
        d="M46.09.002A6.43 6.43 0 0 0 39.93 4.5L.644 120.897a6.47 6.47 0 0 0 6.106 8.653h32.48a6.94 6.94 0 0 0 5.328-4.531l7.834-23.089l27.985 26.101a6.62 6.62 0 0 0 4.165 1.519h36.396l-15.963-45.616l-46.533.011L86.922.002z"
        transform="translate(.587 4.468)scale(.91904)"
      ></path>
      <path
        fill="url(#deviconAzure2)"
        d="M98.055 4.408A6.48 6.48 0 0 0 91.917.002H46.575a6.48 6.48 0 0 1 6.137 4.406l39.35 116.594a6.476 6.476 0 0 1-6.137 8.55h45.344a6.48 6.48 0 0 0 6.136-8.55z"
        transform="translate(.587 4.468)scale(.91904)"
      ></path>
    </svg>
  ),
  gcp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#EA4335"
          d="m161.009 92.39l17.385-17.386l1.159-7.32c-31.68-28.807-82.04-25.54-110.6 6.816c-7.932 8.986-13.817 20.19-16.955 31.76l6.226-.878l34.77-5.733l2.684-2.745c15.466-16.986 41.617-19.272 59.475-4.82z"
        ></path>
        <path
          fill="#4285F4"
          d="M203.16 105.749a78.3 78.3 0 0 0-23.607-38.064l-24.4 24.4a43.37 43.37 0 0 1 15.921 34.404v4.331c11.993 0 21.716 9.722 21.716 21.715s-9.723 21.473-21.716 21.473h-43.493l-4.27 4.636v26.047l4.27 4.087h43.493c31.195.243 56.681-24.605 56.924-55.8a56.48 56.48 0 0 0-24.838-47.229"
        ></path>
        <path
          fill="#34A853"
          d="M84.149 208.778h43.432v-34.77H84.149a21.3 21.3 0 0 1-8.906-1.952l-6.161 1.891l-17.507 17.385l-1.525 5.917c9.818 7.413 21.796 11.582 34.099 11.529"
        ></path>
        <path
          fill="#FBBC05"
          d="M84.149 95.989C52.953 96.175 27.815 121.615 28 152.81a56.49 56.49 0 0 0 22.049 44.438l25.193-25.193c-10.93-4.938-15.787-17.802-10.849-28.731s17.802-15.787 28.73-10.85a21.72 21.72 0 0 1 10.85 10.85l25.193-25.193a56.42 56.42 0 0 0-45.018-22.143"
        ></path>
      </g>
    </svg>
  ),
  docker: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#2396ED" rx="60"></rect>
        <path
          fill="#fff"
          d="M141.187 122.123h20.717v-18.744h-20.717zm-24.662 0h20.716v-18.744h-20.716zm-24.17 0h20.717v-18.744H92.355zm-24.17 0H88.41v-18.744H68.186zm-24.662 0H64.24v-18.744H43.523zm24.663-22.69h20.223V80.69H68.186zm24.17 0h20.716V80.69H92.355zm24.169 0h20.716V80.69h-20.716zm0-22.69h20.716V58h-20.716zM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521c48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738"
        ></path>
      </g>
    </svg>
  ),
  kubernetes: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#326CE5" rx="60"></rect>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth=".11"
          d="M128.073 30a6.014 6.014 0 0 0-5.589 6.314v1.605c.153 1.817.426 3.617.785 5.4a53 53 0 0 1 .563 10.326a6.23 6.23 0 0 1-1.86 2.943l-.128 2.407c-3.456.29-6.886.819-10.265 1.587a73.1 73.1 0 0 0-37.153 21.204l-2.047-1.45a4.42 4.42 0 0 1-3.37-.342a53 53 0 0 1-7.655-6.912a47 47 0 0 0-3.729-3.967l-1.263-1.007a6.82 6.82 0 0 0-3.95-1.493a5.46 5.46 0 0 0-4.531 2.013a6.02 6.02 0 0 0 1.4 8.388l1.177.939a47 47 0 0 0 4.71 2.756a49 49 0 0 1 8.516 5.973a6.3 6.3 0 0 1 1.134 3.276l1.86 1.707a73.54 73.54 0 0 0-11.587 51.248l-2.39.683a7.8 7.8 0 0 1-2.44 2.457a53 53 0 0 1-10.188 1.681a48 48 0 0 0-5.46.427l-1.511.341h-.17a5.716 5.716 0 0 0-4.791 6.924a5.7 5.7 0 0 0 1.488 2.736a5.72 5.72 0 0 0 5.836 1.407h.111l1.536-.17a46 46 0 0 0 5.103-1.86a53 53 0 0 1 9.915-2.901a6.2 6.2 0 0 1 3.26 1.151l2.56-.426a73.92 73.92 0 0 0 32.766 40.983l-1.041 2.176a5.7 5.7 0 0 1 .512 3.208a55 55 0 0 1-5.146 9.318a48 48 0 0 0-3.054 4.548l-.726 1.536a5.72 5.72 0 0 0 2.49 8.015a5.7 5.7 0 0 0 3.057.527a5.72 5.72 0 0 0 4.719-3.687l.707-1.45a47 47 0 0 0 1.639-5.205c1.51-3.729 2.33-7.731 4.394-10.206a4.6 4.6 0 0 1 2.441-1.194l1.28-2.33a73.55 73.55 0 0 0 52.443.128l1.134 2.176a4.44 4.44 0 0 1 2.902 1.749a54 54 0 0 1 3.891 9.557a48 48 0 0 0 1.655 5.214l.708 1.45a5.72 5.72 0 0 0 7.784 3.154a5.7 5.7 0 0 0 2.345-2.036a5.71 5.71 0 0 0 .136-5.981l-.742-1.536a47 47 0 0 0-3.055-4.531c-1.962-2.833-3.652-5.854-5.12-9.019a4.43 4.43 0 0 1 .581-3.414a20 20 0 0 1-.948-2.295a74.02 74.02 0 0 0 32.622-41.128l2.423.426a4.53 4.53 0 0 1 3.183-1.177c3.387.648 6.706 1.706 9.915 2.901a43 43 0 0 0 5.102 1.963c.41.111 1.007.204 1.468.315h.111a5.71 5.71 0 0 0 5.823-1.421a5.7 5.7 0 0 0 1.504-2.729a5.7 5.7 0 0 0-.151-3.111a5.72 5.72 0 0 0-4.642-3.806l-1.655-.392a48 48 0 0 0-5.461-.427a52 52 0 0 1-10.188-1.681a6.4 6.4 0 0 1-2.458-2.457l-2.304-.683a73.8 73.8 0 0 0-11.826-51.137l2.014-1.86a4.5 4.5 0 0 1 1.058-3.226a53.6 53.6 0 0 1 8.447-5.939a48 48 0 0 0 4.71-2.756l1.246-1.007a5.72 5.72 0 0 0 1.456-8.42a5.716 5.716 0 0 0-8.53-.463l-1.262 1.007a48 48 0 0 0-3.729 3.968a53.3 53.3 0 0 1-7.45 7.023a6.3 6.3 0 0 1-3.447.375l-2.159 1.536a74.55 74.55 0 0 0-47.229-22.783c0-.853-.111-2.133-.128-2.534a4.48 4.48 0 0 1-1.86-2.833a53 53 0 0 1 .648-10.3c.367-1.791.623-3.583.785-5.4v-1.707a6.01 6.01 0 0 0-5.589-6.314zm-7.117 44.08l-1.706 29.806h-.128c-.086 1.843-1.169 3.413-2.833 4.301c-1.664.887-3.635.623-5.12-.461L86.722 90.404a58.54 58.54 0 0 1 28.184-15.35a60 60 0 0 1 6.033-.973zm14.233 0a59.1 59.1 0 0 1 34.046 16.418l-24.216 17.211a5.02 5.02 0 0 1-5.274.614a5.02 5.02 0 0 1-2.867-4.471zm-57.34 27.536l22.355 19.95v.128a5.02 5.02 0 0 1 1.587 4.898a5.02 5.02 0 0 1-3.558 3.712v.085l-28.687 8.251a58.53 58.53 0 0 1 8.31-37.032zm100.286 0a59.58 59.58 0 0 1 8.55 36.922l-28.73-8.277v-.111a4.96 4.96 0 0 1-3.559-3.712a5.05 5.05 0 0 1 1.588-4.897l22.185-19.856zm-54.645 21.503h9.148l5.589 7.099l-2.031 8.875l-8.217 3.95l-8.235-3.95l-1.937-8.875zm29.302 24.216a5.3 5.3 0 0 1 1.152 0l29.584 4.992c-4.267 12.287-12.689 22.783-23.679 29.805l-11.434-27.68a5 5 0 0 1-.383-2.354a5.04 5.04 0 0 1 4.726-4.635zm-49.687.128a5.03 5.03 0 0 1 4.13 2.287a4.99 4.99 0 0 1 .401 4.693v.111l-11.365 27.459a58.7 58.7 0 0 1-23.534-29.498l29.327-4.975q.489-.051.99 0zm24.78 11.946a5.04 5.04 0 0 1 4.582 2.628h.111l14.455 26.085l-5.777 1.707a58.83 58.83 0 0 1-32.067-1.655l14.506-26.085c.879-1.536 2.5-2.475 4.267-2.518z"
        ></path>
      </g>
    </svg>
  ),
  mongodb: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#439934"
        fillRule="evenodd"
        d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618"
        clipRule="evenodd"
      ></path>
      <path
        fill="#45A538"
        fillRule="evenodd"
        d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702q2.638 7.77 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#46A037"
        fillRule="evenodd"
        d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433"
        clipRule="evenodd"
      ></path>
      <path
        fill="#409433"
        fillRule="evenodd"
        d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49 49 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.4 41.4 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946"
        clipRule="evenodd"
      ></path>
      <path
        fill="#4FAA41"
        fillRule="evenodd"
        d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4499 4499 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6168 6168 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#4AA73C"
        fillRule="evenodd"
        d="M43.155 32.227c.21.274.511.516.617.826a4499 4499 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3889 3889 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#57AE47"
        fillRule="evenodd"
        d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6168 6168 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769q2.52 7.382 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045q.087 12.124.171 24.251"
        clipRule="evenodd"
      ></path>
      <path
        fill="#60B24F"
        fillRule="evenodd"
        d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813q-2.483-7.395-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577"
        clipRule="evenodd"
      ></path>
      <path
        fill="#A9AA88"
        fillRule="evenodd"
        d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.4 41.4 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#B6B598"
        fillRule="evenodd"
        d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#C2C1A7"
        fillRule="evenodd"
        d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812q-.164-2.079-.331-4.158"
        clipRule="evenodd"
      ></path>
      <path
        fill="#CECDB7"
        fillRule="evenodd"
        d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533"
        clipRule="evenodd"
      ></path>
      <path
        fill="#DBDAC7"
        fillRule="evenodd"
        d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#EBE9DC"
        fillRule="evenodd"
        d="m65.38 124.415l1.218-3.124l.251 3.696z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#CECDB7"
        fillRule="evenodd"
        d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#4FAA41"
        fillRule="evenodd"
        d="m64.316 95.172l-.066-.011l-.066.01l.155-.559z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  postgresql: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 264 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664c-2.452-.366-5.26-.21-8.583.475c-5.792 1.195-10.089 1.65-13.225 1.738c11.837-19.985 21.462-42.775 27.003-64.228c8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549c-5.928-1.046-12.302-1.63-18.99-1.738c-12.537-.2-23.614 2.533-33.079 8.15c-5.24-1.772-13.65-4.27-23.362-5.864c-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48c4.492 14.718 9.282 26.94 14.237 36.33c7.027 13.315 14.546 21.156 22.987 23.972c4.731 1.576 13.327 2.68 22.368-4.85c1.146 1.388 2.675 2.767 4.704 4.048c2.577 1.625 5.728 2.953 8.875 3.74c11.341 2.835 21.964 2.126 31.027-1.848c.056 1.612.099 3.152.135 4.482c.06 2.157.12 4.272.199 6.25c.537 13.374 1.447 23.773 4.143 31.049c.148.4.347 1.01.557 1.657c1.345 4.118 3.594 11.012 9.316 16.411c5.925 5.593 13.092 7.308 19.656 7.308c3.292 0 6.433-.432 9.188-1.022c9.82-2.105 20.973-5.311 29.041-16.799c7.628-10.86 11.336-27.217 12.007-52.99q.13-1.094.244-2.088l.16-1.362l1.797.158l.463.031c10.002.456 22.232-1.665 29.743-5.154c5.935-2.754 24.954-12.795 20.476-26.351"></path>
      <path
        fill="#336791"
        d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934c31.4-46.593 44.527-105.736 33.2-120.211c-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067c-13.456-.22-23.664 3.528-31.41 9.402c0 0-95.43-39.314-90.991 49.444c.944 18.882 27.064 142.873 58.218 105.422c11.387-13.695 22.39-25.274 22.39-25.274c5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332c-8.026 8.967-5.667 10.541-21.711 13.844c-16.235 3.346-6.698 9.302-.471 10.86c7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952c-.37 12.568-.617 21.197 1.86 27.937c2.479 6.74 4.948 21.905 26.04 17.386c17.623-3.777 26.756-13.564 28.027-29.89c.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139c13.218-6.134 21.058-16.377 8.024-13.686z"
      ></path>
      <path
        fill="#FFF"
        d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902c-.69.523-.904 1.129-.962 1.546c-.154 1.105.62 2.327 1.096 2.957c1.346 1.784 3.312 3.01 5.258 3.28q.423.059.842.058c3.245 0 6.196-2.527 6.456-4.392c.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923c-3.088.43-6.082 1.824-5.832 3.659c.2 1.427 2.777 3.863 5.827 3.863q.387 0 .78-.054c2.036-.282 3.53-1.575 4.24-2.32c1.08-1.136 1.706-2.402 1.591-3.225"
      ></path>
      <path
        fill="#FFF"
        d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28c-18.005 3.716-24.453 1.142-26.57-.417c13.995-21.32 25.508-47.092 31.719-71.137c2.942-11.39 4.567-21.968 4.7-30.59c.147-9.463-1.465-16.417-4.789-20.665c-13.402-17.125-33.072-26.311-56.882-26.563c-16.369-.184-30.199 4.005-32.88 5.183c-5.646-1.404-11.801-2.266-18.502-2.376c-12.288-.199-22.91 2.743-31.704 8.74c-3.82-1.422-13.692-4.811-25.765-6.756c-20.872-3.36-37.458-.814-49.294 7.571c-14.123 10.006-20.643 27.892-19.38 53.16c.425 8.501 5.269 34.653 12.913 59.698c10.062 32.964 21 51.625 32.508 55.464c1.347.449 2.9.763 4.613.763c4.198 0 9.345-1.892 14.7-8.33a530 530 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92q.016.2.035.398a118 118 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736c-3.225.666-11.79 2.431-11.916 8.435c-.136 6.56 10.125 9.315 11.294 9.607c4.074 1.02 7.999 1.523 11.742 1.523c9.103 0 17.114-2.992 23.516-8.781c-.197 23.386.778 46.43 3.586 53.451c2.3 5.748 7.918 19.795 25.664 19.794c2.604 0 5.47-.303 8.623-.979c18.521-3.97 26.564-12.156 29.675-30.203c1.665-9.645 4.522-32.676 5.866-45.03c2.836.885 6.487 1.29 10.434 1.289c8.232 0 17.731-1.749 23.688-4.514c6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414c-.573 3.717-1.165 7.56-1.314 12.225c-.147 4.54.42 9.26.968 13.825c1.108 9.22 2.245 18.712-2.156 28.078a37 37 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404c-6.399-11.476-21.384-38.35-13.713-49.316c2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72c9.164 11.711-.927 64.998-30.14 110.969a171 171 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738c-.54-4.488-1.05-8.727-.92-12.709c.134-4.22.692-7.84 1.232-11.34c.663-4.313 1.338-8.776 1.152-14.037c.139-.552.195-1.204.122-1.978c-.475-5.045-6.235-20.144-17.975-33.81c-6.422-7.475-15.787-15.84-28.574-21.482c5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288c-8.73-2.912-18.86-21.364-27.791-50.624c-7.728-25.318-12.244-50.777-12.602-57.916c-1.128-22.578 4.345-38.313 16.268-46.769c19.404-13.76 51.306-5.524 64.125-1.347c-.184.182-.376.352-.558.537c-21.036 21.244-20.537 57.54-20.485 59.759c-.002.856.07 2.068.168 3.735c.362 6.105 1.036 17.467-.764 30.334c-1.672 11.957 2.014 23.66 10.111 32.109a36 36 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99c1.9-13.592 1.199-25.43.822-31.79c-.053-.89-.1-1.67-.127-2.285c3.073-2.725 17.314-10.355 27.47-8.028c4.634 1.061 7.458 4.217 8.632 9.645c6.076 28.103.804 39.816-3.432 49.229c-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424c-6.938-.02-13.687-2.984-18.819-8.34m1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114c.893-.42 2.482-.992 5.238-1.56c13.337-2.745 15.397-4.683 19.895-10.394c1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412c1.621.67 3.2 2.702 3.84 4.938c.303 1.056.643 3.06-.47 4.62c-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346c-2.457-6.144-3.665-33.85-2.808-64.447c.011-.407-.047-.8-.159-1.17a15.4 15.4 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72c-1.48-.613-4.196-1.738-7.46-.903c.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21c4.433-9.848 10.504-23.337 3.915-53.81c-2.468-11.414-10.71-16.988-23.204-15.693c-7.49.775-14.343 3.797-17.761 5.53c-.735.372-1.407.732-2.035 1.082c.954-11.5 4.558-32.992 18.04-46.59c8.489-8.56 19.794-12.788 33.568-12.56c27.14.444 44.544 14.372 54.366 25.979c8.464 10.001 13.047 20.076 14.876 25.51c-13.755-1.399-23.11 1.316-27.852 8.096c-10.317 14.748 5.644 43.372 13.315 57.129c1.407 2.521 2.621 4.7 3.003 5.626c2.498 6.054 5.732 10.096 8.093 13.046c.724.904 1.426 1.781 1.96 2.547c-4.166 1.201-11.649 3.976-10.967 17.847c-.55 6.96-4.461 39.546-6.448 51.059c-2.623 15.21-8.22 20.875-23.957 24.25m68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779c-7.48.35-11.288-.838-12.184-1.569c-.42-8.644 2.797-9.547 6.202-10.503c.535-.15 1.057-.297 1.561-.473q.469.383 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772"
      ></path>
    </svg>
  ),
  mysql: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#00618A"
        d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739c-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958l-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661c1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574c.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001c2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85c-.002-.187.089-9.129-.001-9.219z"
      ></path>
      <path
        fill="#E48E00"
        d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789c1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028c-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606c-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342c.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342c-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793c.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025c1.304.105 1.856.343 2.252.816a.98.98 0 0 1 .315.737v2.397c0 .289-.197.658-.592.974c-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714c.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 0 1 1.108-.079h7.799c.396 0 .752.026 1.147.079c3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956l-3.296.209h-4.395a9.075 9.075 0 0 1-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423c.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32c.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37c-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"
      ></path>
      <path
        fill="#00618A"
        d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861c-.469.198-1.216.203-1.292.79c.257.271.297.674.502 1.006c.394.637 1.059 1.491 1.652 1.938c.647.489 1.315 1.013 2.011 1.437c1.235.754 2.615 1.184 3.806 1.938c.701.446 1.397 1.006 2.082 1.509c.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159c-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503c1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867c-1.607-1.369-3.363-2.737-5.17-3.879c-1.002-.632-2.241-1.043-3.304-1.579c-.356-.181-.984-.274-1.221-.575c-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 0 1-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59c-3.261-5.361-6.771-8.597-12.208-11.777c-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077c-1.802-1.138-6.422-3.613-7.756-.358c-.842 2.054 1.26 4.058 2.011 5.099c.527.73 1.203 1.548 1.58 2.369c.248.54.29 1.081.503 1.652c.521 1.406.976 2.937 1.651 4.236c.341.658.718 1.351 1.149 1.939c.264.36.718.52.789 1.077c-.443.62-.469 1.584-.718 2.369c-1.122 3.539-.699 7.938.934 10.557c.501.805 1.681 2.529 3.303 1.867c1.419-.578 1.103-2.369 1.509-3.95c.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237c.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646c-.562-.551-1.187-1.235-1.651-1.867c-1.309-1.776-2.465-3.721-3.519-5.745c-.503-.966-.94-2.032-1.364-3.016c-.164-.379-.162-.953-.502-1.148c-.466.72-1.149 1.303-1.509 2.154c-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154c-.94-2.233-1.115-5.83-.287-8.401c.214-.666 1.181-2.761.789-3.376c-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 0 1-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457c-.388-.842-1.042-1.693-1.58-2.441c-.595-.83-1.262-1.44-1.724-2.442c-.164-.356-.387-.927-.144-1.293c.077-.247.188-.35.432-.431c.416-.321 1.576.107 2.01.287c1.152.479 2.113.934 3.089 1.58c.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358c1.67.508 3.166 1.297 4.524 2.155c4.139 2.614 7.522 6.334 9.838 10.772c.372.715.534 1.396.861 2.154c.662 1.528 1.496 3.101 2.154 4.596c.657 1.491 1.298 2.996 2.227 4.237c.488.652 2.374 1.002 3.231 1.364c.601.254 1.585.519 2.154.861c1.087.656 2.141 1.437 3.16 2.155c.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 0 0-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508l.071-.071c.445-.313.648-.814.646-1.58c-.179-.188-.205-.423-.359-.646c-.204-.3-.602-.468-.861-.719z"
      ></path>
    </svg>
  ),
  git: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#F34F29"
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.677 9.677 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501z"
      ></path>
    </svg>
  ),
  "ci/cd": (props: IconProps) => <Infinity {...props} />,
  jest: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#99424F" rx="60"></rect>
        <path
          fill="#fff"
          d="M213.353 126.495c0-12.045-8.28-22.178-19.397-25.073L218.854 28H95.461l24.957 73.654c-10.771 3.127-18.703 13.086-18.703 24.898c0 8.686 4.342 16.387 10.943 21.135c-2.605 3.706-5.616 7.123-9.033 10.365c-6.427 6.022-13.549 10.654-21.25 13.723c-6.949-4.69-9.96-12.97-7.238-20.382c10.596-3.242 18.297-13.144 18.297-24.783c0-14.302-11.638-25.883-25.883-25.883c-14.302 0-25.94 11.639-25.94 25.941c0 7.064 2.895 13.55 7.527 18.182c-.405.811-.81 1.621-1.216 2.49c-3.88 7.991-8.28 17.024-9.96 27.157c-3.358 20.266 2.143 36.537 15.403 45.744c7.47 5.153 15.692 7.759 24.551 7.759c15.229 0 30.689-7.643 45.628-15.055c10.655-5.269 21.656-10.77 32.484-13.434c3.996-.984 8.165-1.563 12.566-2.2c8.917-1.274 18.124-2.606 26.404-7.412c9.67-5.616 16.271-14.997 18.182-25.767c1.447-8.28 0-16.618-3.706-23.914c2.49-3.996 3.879-8.686 3.879-13.723m-11.291 0c0 8.048-6.543 14.591-14.592 14.591s-14.591-6.543-14.591-14.591c0-2.606.694-5.096 1.91-7.238a16.6 16.6 0 0 1 1.622-2.317c.579-.694 1.274-1.331 2.026-1.91l.058-.058c.463-.348.985-.695 1.506-1.043c0 0 .058 0 .058-.058c.231-.115.463-.289.694-.405c.058 0 .116-.058.174-.058c.232-.116.521-.231.811-.347c.289-.116.579-.232.81-.348c.058 0 .116-.058.174-.058c.232-.057.463-.173.695-.231c.058 0 .174-.058.232-.058c.289-.058.521-.116.81-.174h.058l.869-.173c.058 0 .173 0 .231-.058c.232 0 .464-.058.695-.058h.29c.289 0 .579-.058.926-.058h.753c.232 0 .405 0 .637.058h.116c.463.058.926.116 1.389.231c6.601 1.39 11.639 7.296 11.639 14.361m-90.446-86.914h91.083l-20.903 61.667c-.869.174-1.737.464-2.606.753l-22.003-44.875l-22.062 44.586c-.868-.29-1.795-.464-2.721-.637zm41.401 81.876c-1.1-5.443-3.879-10.307-7.817-13.897l11.987-24.204l12.101 24.725c-3.59 3.59-6.195 8.165-7.238 13.376zm-29.009-9.149c.289-.058.521-.116.81-.174h.174c.232-.058.463-.058.695-.115h.231c.232 0 .406-.058.637-.058h2.259c.231 0 .405.058.579.058c.116 0 .173 0 .289.057c.232.058.406.058.637.116c.058 0 .116 0 .232.058c.289.058.579.116.81.174h.058c.232.058.464.116.695.231c.058 0 .116.058.232.058c.174.058.405.116.579.232c.058 0 .116.058.174.058c.231.116.463.174.694.289h.058c.29.116.521.232.753.406h.058c.232.116.463.289.695.405c.058 0 .058.058.116.058c.231.116.405.289.637.405l.057.058c.695.521 1.332 1.1 1.969 1.679l.058.058c.579.637 1.158 1.332 1.621 2.085a14.55 14.55 0 0 1 2.374 7.991c0 8.048-6.543 14.591-14.591 14.591c-8.049 0-14.592-6.543-14.592-14.591c-.058-6.775 4.632-12.508 11.002-14.129m-56.978-.405c8.049 0 14.592 6.543 14.592 14.592s-6.543 14.591-14.592 14.591s-14.592-6.543-14.592-14.591c0-8.049 6.544-14.592 14.592-14.592m134.685 50.202c-1.274 7.412-5.849 13.897-12.566 17.777c-6.311 3.648-14.07 4.806-22.235 5.964c-4.458.637-9.148 1.332-13.665 2.432c-12.044 2.953-23.625 8.743-34.858 14.302c-14.36 7.122-27.91 13.839-40.475 13.839c-6.543 0-12.391-1.853-17.95-5.732c-12.739-8.802-12.102-25.304-10.596-34.337c1.39-8.454 5.269-16.387 8.975-23.972c.231-.464.405-.869.637-1.332a22.5 22.5 0 0 0 3.995 1.042c-2.2 12.276 4.053 24.957 16.213 31.21l2.2 1.158l2.374-.868c10.134-3.59 19.514-9.439 27.794-17.256c4.691-4.4 8.686-9.148 12.044-14.302c1.332.232 2.664.29 3.996.29c12.044 0 22.177-8.281 25.072-19.398h9.728c2.895 11.175 13.028 19.398 25.072 19.398c4.806 0 9.265-1.332 13.087-3.59c1.505 4.342 1.968 8.859 1.158 13.375"
        ></path>
      </g>
    </svg>
  ),
  vite: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="deviconVitejs0"
          x1="6"
          x2="235"
          y1="33"
          y2="344"
          gradientTransform="translate(0 .937)scale(.3122)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#41d1ff"></stop>
          <stop offset="1" stopColor="#bd34fe"></stop>
        </linearGradient>
        <linearGradient
          id="deviconVitejs1"
          x1="194.651"
          x2="236.076"
          y1="8.818"
          y2="292.989"
          gradientTransform="translate(0 .937)scale(.3122)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffea83"></stop>
          <stop offset=".083" stopColor="#ffdd35"></stop>
          <stop offset="1" stopColor="#ffa800"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#deviconVitejs0)"
        d="M124.766 19.52L67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.1 3.1 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594m0 0"
      ></path>
      <path
        fill="url(#deviconVitejs1)"
        d="M91.46 1.43L48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968l34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43m0 0"
      ></path>
    </svg>
  ),
  next: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="64" cy="64" r="64"></circle>
      <path
        fill="url(#deviconNextjs0)"
        d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
      ></path>
      <path
        fill="url(#deviconNextjs1)"
        d="M81.778 38.4h8.533v51.2h-8.533z"
      ></path>
      <defs>
        <linearGradient
          id="deviconNextjs0"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="deviconNextjs1"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  nuxt: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#00DC82"
          d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.4 12.4 0 0 0 4.554-4.515a12.24 12.24 0 0 0-.006-12.332l-46.185-79.286a12.4 12.4 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.4 12.4 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.4 12.4 0 0 0-4.555-4.513a12.54 12.54 0 0 0-12.444 0a12.4 12.4 0 0 0-4.555 4.513L36.67 170.834a12.24 12.24 0 0 0-.005 12.332a12.4 12.4 0 0 0 4.554 4.515a12.5 12.5 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86"
        ></path>
      </g>
    </svg>
  ),
  express: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#0F0F0F"
          d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
        ></path>
      </g>
    </svg>
  ),
  fastapi: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#049688"
        d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 0 0-2.375-.5a36.042 36.042 0 0 1-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563c-2.875-1.172-8.172-3.91-9.984-5.156c-.496-.344-.96-.621-1.031-.621c-.07 0-1.23-.816-2.578-1.813c-8.57-6.343-15.004-14.043-19.653-23.527c-.8-1.629-1.453-3.074-1.453-3.21c0-.134-.144-.505-.32-.817c-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 0 0-.625-1.813c-.195-.46-.352-1.02-.352-1.246c0-.227-.195-.965-.433-1.645c-.238-.675-.43-1.472-.43-1.77c0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894c.23-.957.418-2 .418-2.32c0-.321.145-.95.32-1.4c.18-.448.41-1.253.516-1.788c.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813c.11-.238.539-1.21.957-2.16c.676-1.535 2.125-4.43 2.972-5.945c.309-.555.426-.739 2.098-3.352c2.649-4.148 7.176-9.309 11.39-12.988c1.485-1.297 6.446-5.063 6.669-5.063c.062 0 .53-.281 1.043-.625c1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 0 0 1.836-.953c.285-.164.82-.41 3.567-1.64c.605-.27 1.257-.516 3.136-1.173c.414-.144 1.246-.449 1.84-.672c.598-.222 1.301-.406 1.563-.406c.258 0 .937-.18 1.508-.402c.57-.223 1.605-.477 2.304-.563c.696-.082 1.621-.277 2.055-.43c.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 0 0 3.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 0 0 3.781.445c.953.079 2.168.278 2.703.442c.535.16 1.461.36 2.055.433c.594.079 1.594.325 2.222.551c.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625c.594.18 1.613.535 2.27.797c.652.261 1.527.605 1.945.761c.77.29 6.46 3.137 7.234 3.622c6.281 3.917 9.512 6.476 13.856 10.964c5.238 5.414 8.715 10.57 12.254 18.16c.25.536.632 1.329.851 1.758c.215.434.395.942.395 1.13c0 .19.18.76.402 1.269c.602 1.383 1.117 2.957 1.36 4.16c.12.59.343 1.32.495 1.621c.153.3.332 1.063.403 1.688c.07.624.277 1.648.453 2.269c1.02 3.531 1.527 13.934.91 18.535c-.183 1.367-.39 3.02-.46 3.672c-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809c-1.172 2.07-5.101 7.668-5.843 8.324c-.067.058-.399.45-.735.863c-.336.418-1.414 1.586-2.39 2.594c-4.301 4.441-7.77 7.187-13.86 10.969c-.722.449-6.847 3.441-7.992 3.906c-.594.238-1.586.64-2.203.89c-.613.247-1.297.454-1.512.458c-.215.003-.781.195-1.258.425c-.476.23-1.082.422-1.351.426c-.266.004-1.043.192-1.727.418c-.683.23-1.633.477-2.11.55c-.476.075-1.495.278-2.269.45c-.773.172-3.11.508-5.187.746a59.06 59.06 0 0 1-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027c.18-.723 29.234-58.97 29.781-59.7c.461-.617.504-1.605.082-1.953c-.222-.187-3.004-.246-10.43-.234c-5.57.012-10.253.016-10.406.012c-.226-.008-.273-3.73-.25-19.672c.016-10.817-.035-19.766-.113-19.89c-.078-.126-.383-.227-.68-.227c-.418 0-.613.18-.87.808c-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 0 0-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 0 0-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039c-.41.496-.633 1.64-.402 2.07c.21.394.629.41 11.043.394c5.953-.007 10.863.024 10.914.07c.137.141.086 37.31-.055 38.196c-.093.582-.031.89.235 1.156c.46.461.586.457 1.25-.066zm0 0"
      ></path>
    </svg>
  ),
  svelte: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#FF3E00" rx="60"></rect>
        <g clipPath="url(#skillIconsSvelte0)">
          <path
            fill="#fff"
            d="M193.034 61.797c-16.627-23.95-49.729-30.966-73.525-15.865L77.559 72.78c-11.44 7.17-19.372 18.915-21.66 32.186c-1.984 11.136-.306 22.576 5.033 32.492c-3.66 5.491-6.102 11.593-7.17 18c-2.44 13.576.764 27.61 8.696 38.745c16.78 23.95 49.728 30.966 73.525 15.865l41.949-26.695c11.441-7.17 19.373-18.915 21.661-32.187c1.983-11.135.305-22.576-5.034-32.491c3.661-5.492 6.102-11.593 7.17-18c2.593-13.729-.61-27.763-8.695-38.898"
          ></path>
          <path
            fill="#FF3E00"
            d="M115.39 196.491a33.25 33.25 0 0 1-35.695-13.271c-4.881-6.712-6.712-15.101-5.34-23.339c.306-1.373.611-2.593.916-3.966l.763-2.44L78.169 155a55.6 55.6 0 0 0 16.475 8.237l1.525.458l-.152 1.525c-.153 2.136.458 4.424 1.678 6.255c2.441 3.508 6.712 5.186 10.83 4.118c.916-.305 1.831-.61 2.594-1.068l41.796-26.695c2.136-1.372 3.509-3.355 3.966-5.796s-.152-5.034-1.525-7.017c-2.441-3.509-6.712-5.034-10.831-3.966c-.915.305-1.83.61-2.593 1.068l-16.017 10.22c-2.593 1.678-5.491 2.898-8.542 3.661a33.25 33.25 0 0 1-35.695-13.271c-4.729-6.712-6.712-15.102-5.186-23.339c1.372-7.932 6.254-15.102 13.118-19.373l41.949-26.695c2.593-1.678 5.492-2.898 8.543-3.814a33.25 33.25 0 0 1 35.695 13.272c4.881 6.712 6.711 15.101 5.339 23.339c-.306 1.373-.611 2.593-1.068 3.966l-.763 2.44l-2.136-1.525a55.6 55.6 0 0 0-16.474-8.237l-1.526-.458l.153-1.525c.153-2.136-.458-4.424-1.678-6.255c-2.441-3.508-6.712-5.034-10.83-3.966c-.916.305-1.831.61-2.594 1.068l-41.796 26.695c-2.136 1.373-3.509 3.356-3.966 5.797s.152 5.034 1.525 7.017c2.441 3.508 6.712 5.033 10.831 3.966c.915-.305 1.83-.611 2.593-1.068l16.017-10.22c2.593-1.678 5.491-2.899 8.542-3.814a33.25 33.25 0 0 1 35.695 13.271c4.881 6.712 6.712 15.102 5.339 23.339c-1.373 7.932-6.254 15.102-13.119 19.373l-41.949 26.695c-2.593 1.678-5.491 2.898-8.542 3.813"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsSvelte0">
            <path fill="#fff" d="M53 38h149.644v180H53z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  jquery: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#0868AC"
        d="M27.758 20.421c-7.352 10.565-6.437 24.312-.82 35.54l.411.798l.263.506l.164.291l.293.524c.174.307.353.612.536.919l.306.504c.203.326.41.65.622.973l.265.409c.293.437.592.872.901 1.301l.026.033l.152.205c.267.368.542.732.821 1.093l.309.393c.249.313.502.623.759.934l.29.346c.345.406.698.812 1.057 1.208l.021.022l.041.045c.351.383.71.758 1.075 1.133l.344.347c.282.284.569.563.858.841l.351.334c.387.364.777.722 1.176 1.07l.018.016l.205.174c.351.305.708.605 1.068.902l.442.353c.294.235.591.468.89.696l.477.361c.33.243.663.482.999.717l.363.258l.101.072c.318.22.645.431.97.642l.42.28c.5.315 1.007.628 1.519.93l.42.237c.377.217.756.431 1.14.639l.631.326l.816.424l.188.091l.334.161c.427.204.858.405 1.293.599l.273.122c.498.218 1.001.427 1.508.628l.368.144c.469.182.945.359 1.423.527l.179.062c.524.184 1.054.353 1.587.52l.383.114c.542.164 1.079.358 1.638.462c35.553 6.483 45.88-21.364 45.88-21.364c-8.674 11.3-24.069 14.28-38.656 10.962c-.553-.125-1.089-.298-1.628-.456l-.406-.124a44.793 44.793 0 0 1-1.568-.51l-.215-.077a49.537 49.537 0 0 1-1.382-.513l-.388-.152c-.501-.198-1-.405-1.492-.62l-.298-.133a55.398 55.398 0 0 1-1.259-.585l-.364-.175c-.327-.159-.65-.328-.974-.495l-.649-.341c-.395-.21-.782-.43-1.167-.654l-.394-.219a58.203 58.203 0 0 1-1.52-.932l-.41-.273a40.515 40.515 0 0 1-1.081-.719l-.349-.245a54.203 54.203 0 0 1-1.022-.738l-.453-.343c-.31-.237-.618-.476-.922-.721l-.411-.33c-.388-.318-.771-.64-1.149-.969l-.126-.105a54.797 54.797 0 0 1-1.208-1.098l-.34-.328a33.158 33.158 0 0 1-.868-.851l-.34-.34c-.362-.37-.717-.745-1.065-1.126l-.053-.057a41.973 41.973 0 0 1-1.08-1.229l-.283-.336a44.66 44.66 0 0 1-.777-.961l-.285-.355a52.469 52.469 0 0 1-.898-1.195c-8.098-11.047-11.008-26.283-4.535-38.795m17.081-1.626c-5.316 7.65-5.028 17.893-.88 25.983a33.747 33.747 0 0 0 2.351 3.925c.796 1.143 1.68 2.501 2.737 3.418c.383.422.784.834 1.193 1.238l.314.311c.397.385.801.764 1.218 1.132l.05.043l.012.012c.462.405.939.794 1.423 1.178l.323.252c.486.372.981.738 1.489 1.087l.043.033l.68.447l.322.213c.363.233.73.459 1.104.676l.156.092c.322.185.648.367.975.545l.347.18l.682.354l.103.047c.469.23.941.453 1.424.663l.314.13c.386.163.775.323 1.167.473l.5.184c.356.132.712.253 1.072.373l.484.155c.511.158 1.017.359 1.549.448c27.45 4.547 33.787-16.588 33.787-16.588c-5.712 8.228-16.775 12.153-28.58 9.089a34.726 34.726 0 0 1-1.555-.449l-.467-.151a29 29 0 0 1-1.087-.374l-.491-.183a38.673 38.673 0 0 1-1.171-.473l-.315-.133a32.78 32.78 0 0 1-1.432-.666l-.718-.365l-.414-.213c-.306-.166-.61-.338-.909-.514l-.217-.123a30.75 30.75 0 0 1-1.1-.672l-.332-.221l-.712-.472a37.364 37.364 0 0 1-1.484-1.085l-.334-.264c-5.167-4.079-9.263-9.655-11.21-15.977c-2.041-6.557-1.601-13.917 1.935-19.891m14.847-.518c-3.134 4.612-3.442 10.341-1.267 15.435c2.293 5.407 6.992 9.648 12.477 11.66l.682.235l.3.096c.323.102.644.22.978.282c15.157 2.929 19.268-7.777 20.362-9.354c-3.601 5.185-9.653 6.43-17.079 4.627a18.837 18.837 0 0 1-1.796-.555a22.303 22.303 0 0 1-2.134-.886a22.19 22.19 0 0 1-3.741-2.282c-6.645-5.042-10.772-14.659-6.436-22.492"
      ></path>
      <path
        fill="#131B28"
        d="M66.359 96.295h-4.226a.556.556 0 0 0-.517.417l-1.5 6.94l-1.5 6.94a.554.554 0 0 1-.516.417h-2.991c-2.959 0-2.617-2.047-2.011-4.851l.018-.085l.066-.354l.012-.066l.135-.72l.145-.771l.154-.785l.682-3.332l.683-3.332a.336.336 0 0 0-.341-.419h-4.337a.55.55 0 0 0-.514.418l-.933 4.424l-.932 4.425l-.002.006l-.086.412c-1.074 4.903-.79 9.58 5.048 9.727l.17.003h9.163a.554.554 0 0 0 .516-.417l1.976-9.289l1.976-9.29c.049-.23-.103-.417-.338-.418zm-45.256-.049h-4.64a.562.562 0 0 0-.521.416l-.44 1.942l-.44 1.942c-.051.229.098.416.333.416h4.676a.556.556 0 0 0 .518-.417l.425-1.941l.425-1.941c.049-.229-.101-.417-.336-.417zm-1.346 6.044H15.08a.563.563 0 0 0-.521.416l-.657 2.91l-.656 2.909l-.183.834l-.631 2.97l-.63 2.971c-.049.229-.15.599-.225.821c0 0-.874 2.6-2.343 2.57l-.184-.004l-1.271-.023h-.001a.558.558 0 0 0-.524.407l-.485 2.039l-.484 2.038c-.055.228.093.416.326.42c.833.01 2.699.031 3.828.031c3.669 0 5.604-2.033 6.843-7.883l1.451-6.714l1.361-6.297c.049-.227-.103-.415-.337-.415zm86.117-1.574l-.194-.801l-.191-.82l-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004l-3.472-.005h-3.907a.552.552 0 0 0-.515.417l-.173.816l-.204.964l-.057.271l-1.759 8.24l-1.67 7.822c-.05.23-.066.512-.038.626c.028.115.479.209.713.209h3.524c.235 0 .532-.042.66-.094s.317-.513.364-.742l.626-3.099l.627-3.1l.001-.005l.084-.413l.76-3.56l.671-3.144a.555.555 0 0 1 .515-.417l11.089-.005c.235.002.383-.185.33-.414zm14.275-7.24l-.854.003h-3.549a.904.904 0 0 0-.667.353l-7.849 11.498c-.132.194-.283.166-.335-.062l-.578-2.533a.562.562 0 0 0-.522-.416h-5.045c-.235 0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985 3.833c-.059.228.085.413.32.413h4.987a.58.58 0 0 0 .532-.413l.986-3.833a2.52 2.52 0 0 1 .363-.755l12.742-16.911c.142-.188.065-.341-.169-.339l-1.339.008zm-40.086 9.919v-.004a.514.514 0 0 1-.499.441h-6.397c-.222 0-.334-.15-.301-.336l.006-.015l-.004.002l.003-.021l.029-.109c.611-1.624 1.855-2.69 4.194-2.69c2.634-.001 3.148 1.285 2.969 2.732zm-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015c-1.091 5.128-.998 9.921 7.5 9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026 5.406-.033a.553.553 0 0 0 .509-.42l.344-1.681l.067-.327l.41-2.006a.335.335 0 0 0-.341-.418h-7.639c-3.039 0-3.941-.807-3.608-3.181H84.18l-.001.001l.008-.001a.503.503 0 0 0 .445-.315l.029-.106l-.001.001c1.813-6.839 1.293-11.445-6.474-11.446zm-38.81 7.358l-.116.409v.001l-.922 3.268l-.922 3.267a.596.596 0 0 1-.543.411h-4.88c-3.702 0-4.604-2.896-3.702-7.166c.901-4.368 2.668-7.083 6.312-7.358c4.98-.376 5.976 3.126 4.773 7.168zm3.348 7.105s2.301-5.588 2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585c-8.306 0-11.914 5.981-13.29 12.484c-1.376 6.55.427 12.293 8.686 12.246l6.516-.024l6.089-.022a.59.59 0 0 0 .534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006l-1.017-.006c-.199-.001-.313-.131-.289-.302l.027-.095zm41.12-3.741a.28.28 0 1 1-.56.001a.28.28 0 0 1 .56-.001z"
      ></path>
    </svg>
  ),
  astro: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90 90 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.1 90.1 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8 8 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a8 8 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
      ></path>
    </svg>
  ),
  fastify: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
      className="dark:invert"
    >
      <path d="m89.663 24.816l-.162-.253l-.001.001l-.006.004a.513.513 0 0 1-.026.016l-.103.064a60.12 60.12 0 0 1-1.901 1.121a69.437 69.437 0 0 1-5.182 2.645c-4.196 1.919-9.503 3.791-14.045 3.691c-2.294-.051-4.2-.242-5.997-.431l-.294-.031c-1.686-.178-3.294-.347-5.041-.384c-3.707-.078-8.022.443-15.121 2.707c-7.158 2.282-11.743 6.925-15.043 11.348c-1.281 1.717-2.374 3.407-3.345 4.911c-.278.43-.546.845-.806 1.241c-1.18 1.797-2.17 3.17-3.143 3.876c-2.054 1.489-6.299 4.657-10.029 7.45a4307.818 4307.818 0 0 0-4.874 3.656L3.03 67.586l-.415.313l-.108.082l-.028.021l-.007.005l-.002.001l.134.178l-.134-.177l-.145.109l.029.179l.028.172l.056.343l.331-.105l10.46-3.331c-.395.422-.931 1.01-1.611 1.792c-1.614 1.858-4.039 4.81-7.323 9.223a3.526 3.526 0 0 1-.071-.066l-.664-.611l.167.886l.012.064l.011.059l.033.05l.073-.048l-.073.048l.001.002l.003.005l.012.019l.048.072a24.262 24.262 0 0 0 .882 1.198a24.062 24.062 0 0 0 2.483 2.721c1.026.954 2.232 1.872 3.533 2.453c1.303.582 2.717.834 4.138.425h.001c.52-.152 1.094-.39 1.709-.697c2.15 1.181 4.939 2.332 8.02 2.654l.751.079l-.492-.573l-.001-.001l-.004-.005a.245.245 0 0 0-.018-.02l-.068-.081a54.757 54.757 0 0 1-1.165-1.444a47.48 47.48 0 0 1-2.4-3.368l.833-.541l4.288 1.576l.458.168l-.057-.485l-.436-3.716l3.933 1.445l.471.173l-.071-.497l-.509-3.568c.485-.25.965-.487 1.445-.708l.131-.059l.036-.137l4.498-17.014l17.815-12.152l-1.125 2.83v.001c-1.875 4.61-4.568 7.452-6.786 9.141a16.783 16.783 0 0 1-2.813 1.747a11.248 11.248 0 0 1-1.059.449l-.056.019l-.005.002a.069.069 0 0 0-.008.003l-.003.001l-.009.003l-.009.003l-2.975 1.128l-.073.026l-.05.059l-.345.405c-.926 1.084-1.643 1.923-2.202 3.389c-.621 1.628-1.046 4.02-1.425 8.409l-.036.419l.408-.103c1.753-.44 3.402-.539 4.879-.141c3.893 1.049 6.525 3.923 7.92 6.876c.697 1.476 1.08 2.961 1.159 4.231c.08 1.282-.152 2.293-.622 2.874c-.509.629-1.733 1.721-3.318 3.035h-3.433l-.005.295l-.042 2.487l-.002.002l-.138.107h-3.493l-.005.295l-.038 2.422l-.416.313l-.252.19c-1.454.002-3.115-.618-4.447-1.268a21.133 21.133 0 0 1-2.146-1.211a4.868 4.868 0 0 1-.127-.084l-.032-.022l-.006-.004l-.001-.001l-.002-.001l-.47-.323v.571c0 1.295.534 2.905 1.048 4.164a27.627 27.627 0 0 0 .949 2.06l.002.003l-.123.088l.262.175l.085.157l.089-.042l.024.016l.277.175a31.893 31.893 0 0 0 4.483 2.301c1.378.569 2.931 1.078 4.477 1.314c1.544.236 3.102.201 4.476-.338c1.192-.467 2.838-1.417 4.781-2.632c1.336-.835 2.823-1.804 4.413-2.839c.729-.475 1.479-.963 2.246-1.459c4.885-3.159 10.465-6.638 15.63-8.874l31.427-8.279l.148-.039l.055-.143l4.147-10.744l.211-.547l-.567.15l-23.591 6.215V65.12l27.898-7.35l.148-.039l.055-.143l4.147-10.744l.211-.547l-.567.15L85.4 54.848v-9.032l36.183-9.534l.148-.039l.055-.143l3.863-10.004l.035-.092l-.026-.095l-.168-.62l-.078-.287l-.288.076l-37.453 9.868c1.73-2.73 2.328-5.184 2.48-7.005c.082-.982.033-1.778-.037-2.332a7.645 7.645 0 0 0-.147-.814a2.191 2.191 0 0 0-.012-.046l-.004-.013l-.001-.004v-.001l-.287.085zm0 0l-.162-.253l.336-.214l.113.382l-.287.085zm-.288.085c0-.001 0-.001 0 0zM64.657 56.695l7.017-1.85l-2.232 5.783l-7.017 1.85l2.232-5.783zm4.357 6.619l-2.232 5.787l-7.017 1.851l2.233-5.788l7.016-1.85zm10.077-2.163l-2.232 5.787l-7.017 1.851l2.233-5.788l7.016-1.85z"></path>
      <path
        fill="#fff"
        d="M43.745 104.119a11.71 11.71 0 0 1-1.774-.142c-1.386-.211-2.916-.66-4.546-1.333a32.38 32.38 0 0 1-4.528-2.324l-.164-.103l-.196.093l-.184-.342l-.562-.374l.267-.19l-.122-.246c-.179-.367-.45-.944-.721-1.609c-.71-1.738-1.07-3.178-1.07-4.277V92.13l.978.673l.124.082a20.545 20.545 0 0 0 2.114 1.193c1.133.553 2.773 1.21 4.216 1.237l.076-.057l.095-.072l.299-.224l.045-2.866h3.631l.048-2.891h3.621c1.674-1.39 2.748-2.374 3.193-2.924c.426-.527.628-1.5.556-2.667c-.08-1.282-.481-2.746-1.131-4.121a13.298 13.298 0 0 0-2.956-4.06a11.313 11.313 0 0 0-4.772-2.655c-1.351-.364-2.897-.317-4.728.142l-.816.206l.073-.839c.374-4.321.792-6.781 1.444-8.49c.577-1.514 1.317-2.38 2.254-3.477l.089-.105l.254-.299l.101-.119l.144-.055l2.994-1.135l.031-.01l.049-.016a11.163 11.163 0 0 0 1.026-.436a16.436 16.436 0 0 0 2.762-1.716a19.518 19.518 0 0 0 3.469-3.422c1.282-1.621 2.359-3.484 3.2-5.539v-.007l.024-.052l.76-1.912l-16.915 11.537l-4.469 16.906l-.072.274l-.258.118c-.397.183-.805.381-1.243.604l.622 4.35l-4.418-1.623l.493 4.2l-5.064-1.861l-.456.296a47.135 47.135 0 0 0 2.222 3.095c.388.499.704.888.901 1.126c.11.134.198.238.257.309l.073.086a.055.055 0 0 1 .007.009l.08.078v.016l.913 1.062l-1.502-.158c-2.609-.273-5.298-1.153-7.996-2.615a10.37 10.37 0 0 1-1.593.639l-.027.008a.126.126 0 0 1-.01.003l-.03.009c-1.345.376-2.792.225-4.304-.45c-1.175-.525-2.391-1.368-3.615-2.507a24.84 24.84 0 0 1-3.221-3.698l-.087-.124l-.006.004l-.159-.244l-.052-.069v-.011l-.019-.028l-.033-.181l-.331-1.775l1.155 1.062c3.307-4.431 5.702-7.32 7.138-8.973c.296-.34.581-.664.855-.968L2.86 68.992l-.663.21L2 67.987l.435-.327l.193-.145l.79-.594l.948-.712c1.145-.86 2.92-2.192 4.874-3.656c3.399-2.546 7.899-5.905 10.033-7.453c.912-.661 1.886-1.996 3.068-3.797c.259-.395.528-.811.805-1.239c.97-1.501 2.069-3.201 3.356-4.927c1.971-2.642 3.975-4.778 6.126-6.531a27.551 27.551 0 0 1 9.067-4.924c6.269-2 10.82-2.813 15.218-2.721c1.76.037 3.366.206 5.066.386l.294.031c1.957.206 3.757.38 5.972.429c2.044.045 4.421-.317 7.063-1.077c2.132-.613 4.437-1.484 6.851-2.587a70 70 0 0 0 5.159-2.633a56.431 56.431 0 0 0 1.962-1.16l.072-.046l.66-.421l.311 1.052l-.015.004c.029.14.069.356.104.634c.095.753.108 1.559.038 2.394c-.182 2.191-.9 4.374-2.137 6.501l37.311-9.83l.376 1.382l-.07.183l-3.973 10.291l-.297.078l-35.96 9.475v8.412l32.642-8.602l-.422 1.095l-4.257 11.03l-.297.078l-27.675 7.292v8.408l23.215-6.115l1.135-.299l-.422 1.095l-4.257 11.031l-.297.078l-31.404 8.273c-5.05 2.189-10.465 5.543-15.565 8.842c-.732.473-1.45.941-2.145 1.394l-.124.081c-1.575 1.025-3.063 1.994-4.394 2.826c-2.262 1.415-3.752 2.234-4.831 2.657c-.844.33-1.8.496-2.857.496zM32.944 99.64l.271.171a31.78 31.78 0 0 0 4.439 2.278c1.586.655 3.068 1.091 4.407 1.295c1.674.255 3.128.147 4.321-.321c1.043-.409 2.502-1.213 4.732-2.607c1.327-.83 2.812-1.797 4.385-2.821l.124-.081a706.06 706.06 0 0 1 2.147-1.395c5.129-3.317 10.578-6.691 15.674-8.898l.021-.009l.022-.006l31.427-8.279l4.146-10.744l-23.967 6.314v-9.649l28.122-7.409l4.147-10.744L85.1 55.237v-9.653l36.407-9.593l3.863-10.004l-.168-.619L87.01 35.43l.409-.645c1.423-2.245 2.242-4.556 2.434-6.869c.082-.989.026-1.78-.036-2.269a7.475 7.475 0 0 0-.087-.538l-.2.059l-.122-.19l-.002-.003a.74.74 0 0 0-.043.027l-.034.196l-.174-.026l-.013-.035l-.023.014c-.471.285-.978.581-1.508.88a70.134 70.134 0 0 1-5.204 2.657c-2.441 1.116-4.774 1.997-6.935 2.618c-2.7.776-5.137 1.146-7.242 1.1c-2.238-.049-4.051-.225-6.021-.432l-.294-.031c-1.687-.178-3.281-.346-5.016-.382c-4.328-.091-8.821.714-15.023 2.693c-3.268 1.042-6.17 2.618-8.87 4.818c-2.112 1.721-4.083 3.822-6.024 6.424c-1.276 1.71-2.369 3.401-3.333 4.894c-.277.428-.547.846-.807 1.242c-1.253 1.909-2.229 3.237-3.218 3.954c-2.131 1.545-6.628 4.903-10.025 7.447a4106.538 4106.538 0 0 0-4.873 3.656l-.947.712l-.79.594l-.192.144l-.142.106l-.006-.008l.03.184l11.557-3.68l-.788.84a64.448 64.448 0 0 0-1.603 1.784c-1.459 1.679-3.911 4.638-7.309 9.205l-.198.266l-.183-.167v.121l.122.174c.211.298.443.607.689.92c.54.688 1.404 1.712 2.451 2.687c1.176 1.094 2.337 1.901 3.451 2.399c1.383.618 2.697.758 3.907.418l.038-.019h.028a10.45 10.45 0 0 0 1.619-.665l.14-.07l.138.076c2.648 1.454 5.284 2.333 7.835 2.611v-.078l-.021-.025a49.146 49.146 0 0 1-1.172-1.454a47.155 47.155 0 0 1-2.416-3.39l-.162-.251l.251-.162l.832-.541l.126-.082l4.43 1.628l-.493-4.201l4.391 1.613l-.54-3.779l.19-.098c.518-.267.995-.5 1.457-.714l4.526-17.122l18.717-12.767l-1.466 3.687v.009l-.025.053c-.865 2.126-1.977 4.056-3.305 5.734a20.08 20.08 0 0 1-3.576 3.528a17.156 17.156 0 0 1-2.864 1.778a11.676 11.676 0 0 1-1.091.463l-.061.021l-.021.007l-2.974 1.128l-.255.3l-.09.105c-.935 1.094-1.61 1.884-2.15 3.301c-.63 1.654-1.038 4.067-1.407 8.328c1.932-.485 3.578-.531 5.03-.14a11.92 11.92 0 0 1 5.023 2.793a13.893 13.893 0 0 1 3.091 4.244c.682 1.443 1.103 2.984 1.187 4.34c.083 1.334-.161 2.429-.688 3.081c-.484.599-1.583 1.605-3.36 3.078l-.083.069H42.36l-.044 2.613l-.123.118l-.014.007l-.02.015l-.094.073l-.082.064h-3.302l-.04 2.568l-.116.088c-.14.106-.279.211-.418.314l-.095.072l-.156.117l-.08.061h-.107c-.874 0-2.374-.226-4.572-1.299a21.316 21.316 0 0 1-2.178-1.229a6.052 6.052 0 0 1-.131-.087l-.044-.029c0 1.007.355 2.408 1.026 4.05a26.393 26.393 0 0 0 .916 1.995l.006.006l.021.047l.089.177l.009.006l.003.006l.101.063l.029.019zm26.33-28.249l2.499-6.478l7.732-2.038l-2.498 6.477l-7.733 2.039zm2.948-5.976l-1.966 5.097l6.302-1.662l1.966-5.096l-6.302 1.661zm7.128 3.813l2.499-6.478l7.732-2.039l-2.498 6.477l-7.733 2.04zm2.949-5.976l-1.966 5.097l6.302-1.662l1.966-5.096l-6.302 1.661zm-10.366-.334l2.499-6.474l7.732-2.039l-2.499 6.473l-7.732 2.04zm2.948-5.972l-1.966 5.092l6.302-1.662l1.965-5.092l-6.301 1.662z"
      ></path>
    </svg>
  ),
  nestjs: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M302.132 73.922c-9.305-14.646-6.329-24.304-1.194-34.275c4.597-8.926 6.475-24.438-9.768-36.645c14.955-5.505 38.554 4.228 38.96 22.055c-8.678 11.94-32.382 16.685-27.998 48.865m107.371 329.114c-7.26 23.534-3.95 36.056-35.526 84.92c55.83-37.69 82.17-86.35 90.863-141.577c5.458 23.029 5.974 43.918 3.83 63.656c46.264-60.907 77.963-183.728-28.659-307.19c-4.289 54.573-57.068 97.543-117.937 80.694C426.44 172.034 433.13 39.324 343.47 8.68c1.751 36.92-48.622 24.83-33.808 74.222c-51.308-29.029-163.409-34.995-207.974 9.046c-22.974 22.704-38.656 41.481-67.369 42.722c-23.707 1.024-55.013 39.494-14.281 59.168c3.89 16.395 17.562 25.73 25.49 27.339c-1.973 29.195 4.238 14.31 13.338 1.584c-3.058 36.905 1.982 23.61 16.244 4.623c120.67-24.404 187.31 74.004 188.064 134.446c-.53-10.966-18.061-23.72-27.338-20.207c-6.268 13.28-13.098 24.551-21.527 30.112c.881-8.805.28-17.61-1.32-26.414c-2.78 10.647-8.013 21.703-16.377 33.281c-16.638.929-39.923-11.446-33.15-31.96c9.555-19.95-9.186-24.098-24.284-18.387c-11.345 4.292-19.012 16.178-20.06 19.874c-3.785 13.331-2.54 43.094 23.346 62.83c-6.786 1.25-13.753 2.364-18.49 5.15c44.033 26.631 88.978 17.633 114.006 7.584c40.978-16.453 69.241-61.994 73.663-97.125c11.374 49.414-9.003 104.332-54.678 133.786c13.05 1.381 38.593-7.46 64.713-16.773c-19.746 24.85-43.349 48.414-82.014 66.958c76.158-6.38 131.863-44.618 169.84-107.503"
      ></path>
    </svg>
  ),
  meteor: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="m0 0l22.349 20.946a.93.93 0 0 1-.126 1.174a.98.98 0 0 1-1.264.083l.003.002zm6.638 2.099l17.349 15.95a.92.92 0 0 1-.125 1.174a.976.976 0 0 1-1.262.083l.003.002zM1.975 6.595l17.349 15.95a.93.93 0 0 1-.125 1.175a.97.97 0 0 1-1.262.081l.003.002zm10.273-2.692l12.128 11.145a.65.65 0 0 1-.088.821a.68.68 0 0 1-.882.058l.002.001zm-8.737 7.894l12.123 11.142a.65.65 0 0 1-.09.816a.68.68 0 0 1-.882.059l.002.001zM17.98 6.506l5.534 5.054a.29.29 0 0 1-.044.384a.35.35 0 0 1-.438.027l.001.001zM6.301 17.336l5.53 5.055a.29.29 0 0 1-.042.384a.35.35 0 0 1-.436.026l.001.001z"
      ></path>
    </svg>
  ),
  socketio: (props: IconProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='1em' height='1em' {...props}><path fill="#010101" d="M96.447 7.382c32.267-8.275 67.929-3.453 96.386 14.11c35.84 21.433 59.238 61.976 59.833 103.71c1.31 42.15-20.659 83.944-55.963 106.865c-39.293 26.433-93.648 27.446-133.775 2.322c-40.9-24.41-64.774-73.645-58.641-120.916c4.94-49.95 43.52-94.005 92.16-106.09"/><path fill="#FFF" d="M91.505 27.803c60.964-24.41 135.74 20.658 142.05 86.028c9.824 58.82-38.995 118.593-98.59 120.32c-56.677 5.656-111.449-42.39-113.056-99.304c-4.227-46.08 26.136-91.803 69.596-107.044"/><path fill="#010101" d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097c-14.646 22.505-29.708 44.711-44.354 67.215c-12.562.06-25.123.06-37.626-.119m23.1 12.443c12.621 0 25.183 0 37.745.179c-27.505 22.206-54.117 45.484-82.099 67.096c14.646-22.505 29.708-44.77 44.354-67.275"/></svg>
  ),
  strapi: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#4945FF"
        d="M0 88.747c0-41.836 0-62.754 12.997-75.75S46.91 0 88.747 0h78.507c41.835 0 62.752 0 75.75 12.997C256 25.993 256 46.91 256 88.747v78.507c0 41.835 0 62.752-12.997 75.75C230.006 256 209.09 256 167.253 256H88.748c-41.836 0-62.754 0-75.75-12.997S0 209.09 0 167.253z"
      ></path>
      <path
        fill="#FFF"
        d="M176.64 77.653H90.453V121.6H134.4v43.946h43.946V79.36c0-.943-.764-1.707-1.706-1.707"
      ></path>
      <path fill="#FFF" d="M132.693 121.6h1.707v1.707h-1.707z"></path>
      <path
        fill="#9593FF"
        d="M90.453 121.6h42.24c.943 0 1.707.764 1.707 1.706v42.24H92.16a1.706 1.706 0 0 1-1.707-1.706zm43.947 43.946h43.946l-42.49 42.49c-.537.538-1.456.157-1.456-.602zM90.453 121.6H48.566c-.76 0-1.14-.92-.603-1.457l42.49-42.49z"
      ></path>
    </svg>
  ),
  prisma: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#677EEB" rx="60"></rect>
        <path
          fill="#F7FAFC"
          fillRule="evenodd"
          d="M52.658 165.183a9.39 9.39 0 0 1-.075-9.929L123.045 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  trpc: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#398ccb"
        d="M0 38C0 17 17 0 38 0h52c21 0 38 17 38 38v52c0 21-17 38-38 38H38c-21 0-38-17-38-38z"
      ></path>
      <path
        fill="#fff"
        d="M63.9 18.8L81.6 29v5.6l21.5 12.5v21.2l5.8 3.3v20.6l-17.7 10.2l-7.9-4.6l-19.2 11.1l-19.1-11l-7.7 4.5l-17.8-10.3V71.6l5.6-3.2V47.1l21-12.2V29zM81.7 40v9.6L63.9 59.8L46.2 49.6v-9.3l-16.5 9.5v16l7.6-4.4l17.8 10.3v20.5l-5.4 3.1l14.5 8.3l14.5-8.4l-5.3-3V71.7l17.8-10.3l7.4 4.3V49.8zm7.2 55.8V83.2L78.1 77v12.5zM104.3 77l-10.8 6.3v12.5l10.8-6.3zM35 95.8V83.3L24.1 77v12.5zm15.5-18.7l-10.8 6.2v12.5l10.8-6.2zm40.7 2.3l10.9-6.3l-10.9-6.2l-10.8 6.2zM37.3 66.9l-10.8 6.2l10.8 6.3l10.8-6.3zm24.3-13.6V40.8l-10.8-6.2v12.5zm15.5-18.8l-10.9 6.3v12.5L77.1 47zm-13.2 2.3l10.9-6.3l-10.9-6.2l-10.8 6.2z"
      ></path>
    </svg>
  ),
  graphql: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#E535AB"
          d="m47.862 176.192l7.342 4.239l81.793-141.665l-7.342-4.239z"
        ></path>
        <path fill="#E535AB" d="M209.766 164.875H46.181v8.478h163.585z"></path>
        <path
          fill="#E535AB"
          d="m49.418 169.637l81.823 47.242l4.239-7.342l-81.823-47.242zm71.08-123.125l81.823 47.242l4.239-7.342l-81.823-47.242z"
        ></path>
        <path
          fill="#E535AB"
          d="m49.44 86.38l4.24 7.342l81.823-47.242l-4.239-7.342z"
        ></path>
        <path
          fill="#E535AB"
          d="m119.019 38.768l81.793 141.664l7.342-4.239l-81.793-141.664zm-57.874 41.99h-8.478v94.484h8.478z"
        ></path>
        <path fill="#E535AB" d="M203.331 80.758h-8.478v94.484h8.478z"></path>
        <path
          fill="#E535AB"
          d="m126.095 206.877l3.703 6.414l71.164-41.088l-3.703-6.413z"
        ></path>
        <path
          fill="#E535AB"
          d="M214.567 178c-4.903 8.529-15.833 11.44-24.362 6.537s-11.44-15.832-6.537-24.361s15.833-11.441 24.362-6.538c8.58 4.954 11.491 15.833 6.537 24.362M72.279 95.824c-4.903 8.529-15.833 11.441-24.362 6.538S36.477 86.529 41.38 78c4.903-8.53 15.832-11.44 24.362-6.537c8.529 4.954 11.44 15.832 6.537 24.361M41.431 178c-4.903-8.529-1.992-19.408 6.537-24.362c8.53-4.903 19.408-1.992 24.362 6.538c4.903 8.529 1.992 19.407-6.537 24.361c-8.58 4.903-19.459 1.992-24.362-6.537m142.288-82.176c-4.903-8.529-1.992-19.407 6.537-24.361c8.529-4.903 19.408-1.992 24.362 6.537c4.903 8.53 1.992 19.408-6.538 24.362c-8.529 4.903-19.458 1.991-24.361-6.538M127.999 228c-9.857 0-17.824-7.967-17.824-17.824s7.967-17.825 17.824-17.825s17.824 7.968 17.824 17.825c0 9.806-7.967 17.824-17.824 17.824m0-164.351c-9.857 0-17.824-7.968-17.824-17.825S118.142 28 127.999 28s17.824 7.967 17.824 17.824s-7.967 17.825-17.824 17.825"
        ></path>
      </g>
    </svg>
  ),
  relay: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 151 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#F26B00"
        d="M208.615 119.908H96.683c-10.537 0-19.11-8.572-19.11-19.107c0-10.539 8.572-19.111 19.11-19.111h61.129c17.84 0 32.353-14.513 32.353-32.353s-14.512-32.354-32.353-32.354H47.223C44.17 7.143 34.995 0 24.152 0C10.811 0 0 10.81 0 24.152c0 13.341 10.812 24.152 24.153 24.152c11.239 0 20.687-7.677 23.381-18.076h110.279c10.535 0 19.107 8.573 19.107 19.11s-8.572 19.109-19.107 19.109h-61.13c-17.839 0-32.353 14.513-32.353 32.354c0 17.84 14.513 32.352 32.354 32.352h111.93c2.878 10.121 12.189 17.53 23.234 17.53c13.341 0 24.152-10.81 24.152-24.151c0-13.342-10.81-24.152-24.152-24.152c-11.044 0-20.354 7.408-23.233 17.528"
      ></path>
    </svg>
  ),
  remix: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <path
          id="skillIconsRemixLight0"
          fill="#000"
          d="M187.903 168.726c1.361 17.488 1.361 25.686 1.361 34.634h-40.462c0-1.949.035-3.732.07-5.54c.11-5.621.224-11.482-.687-23.318c-1.203-17.329-8.665-21.179-22.386-21.179H62.16v-31.528h65.565c17.331 0 25.997-5.272 25.997-19.231c0-12.275-8.666-19.713-25.997-19.713H62.16V52h72.786c39.236 0 58.734 18.532 58.734 48.134c0 22.142-13.72 36.582-32.256 38.989c15.647 3.129 24.794 12.034 26.479 29.603"
        ></path>
      </defs>
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <use
          href="#skillIconsRemixLight0"
          fillRule="evenodd"
          clipRule="evenodd"
        ></use>
        <use
          href="#skillIconsRemixLight0"
          fillRule="evenodd"
          clipRule="evenodd"
        ></use>
        <path
          fill="#000"
          d="M62.16 203.36v-23.503h42.783c7.146 0 8.698 5.3 8.698 8.461v15.042z"
        ></path>
        <path
          fill="#000"
          stroke="#fff"
          strokeOpacity=".8"
          strokeWidth=".32"
          d="M62 203.36v.16h51.801v-15.202c0-1.602-.392-3.755-1.701-5.512c-1.314-1.765-3.539-3.109-7.157-3.109H62z"
        ></path>
      </g>
    </svg>
  ),
  gatsby: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#639" rx="60"></rect>
        <path
          fill="#fff"
          d="M228 128h-63.636v18.182H208c-6.364 27.273-26.364 50-52.727 59.091L50.727 100.727C61.637 68.909 92.546 46.182 128 46.182c27.273 0 51.818 13.636 67.273 34.545l13.636-11.818C190.727 44.364 161.636 28 128 28c-47.273 0-87.273 33.636-97.273 78.182l120 120C194.364 215.273 228 175.273 228 128m-200 .909c0 25.455 10 50 29.09 69.091c19.092 19.091 44.546 29.091 69.092 29.091z"
        ></path>
      </g>
    </svg>
  ),
  gridsome: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosGridsomeIcon0"
          x1="20.938%"
          x2="67.331%"
          y1="135.775%"
          y2="141.765%"
        >
          <stop offset="0%" stopColor="#1A7D75"></stop>
          <stop offset="100%" stopColor="#1A8864"></stop>
        </linearGradient>
        <linearGradient
          id="logosGridsomeIcon1"
          x1="5.879%"
          x2="-17.306%"
          y1="11.117%"
          y2="72.271%"
        >
          <stop offset="1.293%" stopColor="#168A81"></stop>
          <stop offset="100%" stopColor="#31A97F"></stop>
        </linearGradient>
        <linearGradient
          id="logosGridsomeIcon2"
          x1="-144.301%"
          x2="-70.357%"
          y1="53.433%"
          y2="117.634%"
        >
          <stop offset="0%" stopColor="#27A59B"></stop>
          <stop offset="100%" stopColor="#64D8A2"></stop>
        </linearGradient>
        <linearGradient
          id="logosGridsomeIcon3"
          x1="-143.419%"
          x2="-4.693%"
          y1="60.471%"
          y2="180.917%"
        >
          <stop offset="0%" stopColor="#27A59B"></stop>
          <stop offset="100%" stopColor="#64D8A2"></stop>
        </linearGradient>
        <linearGradient
          id="logosGridsomeIcon4"
          x1="208.845%"
          x2="86.111%"
          y1="-141.921%"
          y2="-183.711%"
        >
          <stop offset="0%" stopColor="#27A59B"></stop>
          <stop offset="100%" stopColor="#64D8A2"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosGridsomeIcon0)"
        d="M231.385 105.754c12.308-.592 23.204 8.957 24.267 21.277c4.604 59.597-48.957 126.248-125.818 128.382c-12.319.343-22.58-9.393-22.922-21.745c-.34-12.353 9.367-22.643 21.686-22.986c50.99-1.416 83.294-45.459 81.57-81.508c-.59-12.342 8.908-22.828 21.217-23.42"
      ></path>
      <path
        fill="url(#logosGridsomeIcon1)"
        d="M22.551 104.485c12.323 0 22.312 10.018 22.312 22.375c0 51.575 41.47 84.953 82.89 83.931c12.32-.304 22.551 9.464 22.854 21.816c.304 12.354-9.437 22.615-21.756 22.92C64.08 257.123.017 205.266.017 126.86c0-12.357 10.211-22.375 22.534-22.375"
      ></path>
      <path
        fill="url(#logosGridsomeIcon2)"
        d="M175.646 128.594c0-12.65 10.32-22.906 23.049-22.906h33.589c12.73 0 23.368 10.256 23.368 22.906c0 12.652-10.638 22.907-23.368 22.907h-33.59c-12.728 0-23.048-10.255-23.048-22.907"
      ></path>
      <path
        fill="url(#logosGridsomeIcon3)"
        d="M105.168 128.628c0-12.67 10.253-22.94 22.887-22.94s22.889 10.27 22.889 22.94c0 12.669-10.254 22.94-22.889 22.94s-22.887-10.271-22.887-22.94"
      ></path>
      <path
        fill="url(#logosGridsomeIcon4)"
        d="M150.31 21.446c.511 12.346-9.056 22.77-21.368 23.283c-53.149 2.214-85.596 43.987-84.017 83.652c.492 12.346-8.891 22.756-21.204 23.249S.58 142.158.089 129.81C-2.485 65.174 51.335 1.275 127.09.02c12.312-.513 22.708 9.08 23.218 21.426"
      ></path>
    </svg>
  ),
  expo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 231 256"
      width="1em"
      height="1em"
      {...props}
      className="dark:invert"
    >
      <path
        fill="#000020"
        d="M121.309 84.673c2.094-3.086 4.385-3.478 6.244-3.478c1.86 0 4.957.392 7.051 3.478c16.502 22.667 43.742 67.819 63.835 101.126c13.104 21.72 23.168 38.403 25.233 40.526c7.751 7.97 18.382 3.003 24.559-6.037c6.081-8.9 7.77-15.15 7.77-21.817c0-4.54-88.106-168.4-96.979-182.039C150.49 3.314 147.71 0 133.106 0h-10.93c-14.56 0-16.665 3.314-25.198 16.432C88.106 30.072 0 193.93 0 198.472c0 6.666 1.688 12.916 7.77 21.816c6.177 9.04 16.808 14.007 24.559 6.037c2.065-2.123 12.13-18.806 25.233-40.526c20.093-33.307 47.245-78.46 63.747-101.126"
      ></path>
    </svg>
  ),
  flutter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#44D1FD"
          d="M144.934 38.062L200.709 38l-93.575 93.526l-24.387 24.251L55 127.996zm-.519 83.507c.724-.956 2.056-.484 3.067-.607l53.179.013l-48.467 48.42l-27.891-27.72z"
        ></path>
        <path
          fill="#1FBCFD"
          d="m96.501 169.442l27.802-27.767l27.891 27.72l.116.123l-28 27.74z"
        ></path>
        <path
          fill="#08589C"
          d="m124.31 197.258l28-27.74l48.371 48.419c-18.22.041-36.434-.014-54.647.027c-1.038.232-1.68-.717-2.343-1.304z"
        ></path>
      </g>
    </svg>
  ),
  kotlin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="url(#skillIconsKotlinLight0)"
          d="M218 218H38V38h180l-90 90z"
        ></path>
        <defs>
          <linearGradient
            id="skillIconsKotlinLight0"
            x1="218"
            x2="38"
            y1="38"
            y2="218"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".003" stopColor="#E44857"></stop>
            <stop offset=".469" stopColor="#C711E1"></stop>
            <stop offset="1" stopColor="#7F52FF"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  swift: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F05138" rx="60"></rect>
        <path
          fill="#fff"
          d="m202.677 158.04l.724-2.896c10.616-42.224-15.201-92.41-59.114-118.71c19.302 26.058 27.747 57.666 20.267 85.172c-.724 2.413-1.448 4.826-2.413 7.239c-.965-.724-2.171-1.448-3.86-2.172c0 0-43.672-27.024-90.963-74.556c-1.207-1.206 25.334 37.881 55.253 69.489c-14.235-7.962-53.564-36.675-78.658-59.355c3.137 5.067 6.756 10.134 10.617 14.718c20.75 26.541 48.015 59.114 80.588 84.207c-22.922 13.995-55.254 15.201-87.344 0c-7.962-3.619-15.442-8.203-22.44-13.27c13.512 21.715 34.504 40.535 60.08 51.634c30.401 13.029 60.803 12.306 83.242.241c0 0 .241 0 .241-.241c.965-.482 1.931-1.206 2.896-1.689c10.857-5.549 32.09-11.099 43.672 11.099c3.378 5.067 9.41-23.887-12.788-50.91"
        ></path>
      </g>
    </svg>
  ),
  dart: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#00C4B3"
          d="M87.45 87.005L75.81 75.361l.045 84.102l.14 3.927c.057 1.856.409 3.937.971 6.103l92.18 32.512l23.062-10.209l.02-.034L87.444 87.005z"
        ></path>
        <path
          fill="#22D3C5"
          d="M76.97 169.493h.008a1 1 0 0 0-.039-.113c.02.043.02.085.028.113zm115.217 22.303l-23.063 10.209l-92.165-32.512c1.758 6.761 5.659 14.36 9.85 18.506l30.065 29.917l66.904.084l8.381-26.204z"
        ></path>
        <path
          fill="#0075C9"
          d="m76.126 75.364l-35.84 54.127c-2.975 3.178-1.49 9.736 3.3 14.568l20.688 20.858l13.005 4.584c-.562-2.16-.916-4.219-.97-6.103l-.14-3.926l-.043-84.102z"
        ></path>
        <path
          fill="#0075C9"
          d="M169.906 76.447c-2.165-.549-4.241-.895-6.111-.948l-4.157-.152l-83.827.02l116.415 116.398l10.226-23.063l-32.54-92.25z"
        ></path>
        <path
          fill="#00A8E1"
          d="M169.799 76.427a1 1 0 0 0 .107.028v-.011c-.036-.008-.07-.008-.107-.023zm18.605 9.894c-4.233-4.26-11.728-8.156-18.498-9.866l32.541 92.242l-10.238 23.062l24.981-7.982l.056-68.49l-28.845-28.968z"
        ></path>
        <path
          fill="#00C4B3"
          d="m165.344 63.523l-20.812-20.7c-4.855-4.772-11.413-6.263-14.563-3.293L75.845 75.361l83.827-.02l4.156.152c1.871.057 3.949.4 6.112.948l-4.59-12.923z"
        ></path>
      </g>
    </svg>
  ),
  elixir: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="url(#skillIconsElixirLight0)"
          fillRule="evenodd"
          d="M133.418 28.503q-21.796 7.726-42.08 45.099c-20.284 37.372-46.482 90.479-10.407 132.527c16.689 19.452 44.245 30.933 80.409 12.75c29.051-14.607 37.131-56.526 26.701-76.225c-21.515-40.634-43.343-50.656-49.188-75.856q-5.845-25.2-5.435-38.295"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#skillIconsElixirLight1)"
          fillRule="evenodd"
          d="M133.418 28q-21.907 7.805-42.08 45.098c-20.174 37.293-46.483 90.48-10.408 132.527c16.69 19.453 43.891 25.739 58.985 14.202c9.84-7.521 16.532-14.69 20.388-29.796c4.293-16.82.999-39.464-1.258-49.867q-4.284-19.745-2.805-43.343l-.779-.95c-7.858-9.617-13.921-17.993-16.608-29.576q-5.846-25.2-5.435-38.295"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#skillIconsElixirLight2)"
          fillRule="evenodd"
          d="M121.325 34.543q-20.404 16.125-30.34 54.097c-9.939 37.971-11.015 72.986-7.51 93.353c6.794 39.482 42.018 54.469 78.148 36.092c22.234-11.31 31.495-35.586 31.005-61.937c-.508-27.284-53.233-58.207-62.571-80.977q-9.338-22.77-8.732-40.628"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#skillIconsElixirLight3)"
          fillRule="evenodd"
          d="M155.811 105.732q24.47 31.383 10.668 43.692c-13.802 12.31-47.554 20.341-68.552 5.451q-20.997-14.89-15.89-63.887q-8.666 18.102-14.657 36.675t-3.498 38.872q7.507 15.186 36.502 20.285c28.994 5.098 56.437 2.579 74.852-6.704q18.415-9.282 17.419-18.481q.666-13.583-8.377-25.862q-9.042-12.278-28.467-30.041"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#skillIconsElixirLight4)"
          fillRule="evenodd"
          d="M92.06 84.84q-.204 22.665 11.655 43.091c11.86 20.427 25.704 40.61 46.42 57.341q20.716 16.73 33.106 10.81q-10.176 18.213-21.641 17.849c-11.465-.364-25.444-5.374-47.842-32.291q-22.4-26.916-30.646-50.922q1.308-9.524 2.773-18.971q1.467-9.449 6.175-26.907"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#skillIconsElixirLight5)"
          fillRule="evenodd"
          d="M127.098 105.576c1.267 12.309 6.057 31.999 0 45.108c-6.057 13.11-34.034 36.792-26.311 57.655c7.723 20.862 26.543 16.178 38.348 6.564s18.124-25.248 19.525-36.242c1.401-10.995-3.351-32.149-4.897-50.55q-1.545-18.4 2.098-31.553l-3.618-4.553l-21.292-6.304q-5.12 7.567-3.853 19.875"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#skillIconsElixirLight6)"
          fillRule="evenodd"
          d="M134.698 44.61q-10.336 4.367-19.587 17.31c-9.251 12.941-13.963 20.699-10.475 46.353q3.488 25.655 4.992 47.202l29.822-86.646q-1.644-6.623-2.735-11.963q-1.092-5.34-2.017-12.257"
          clipRule="evenodd"
        ></path>
        <path
          fill="#330A4C"
          fillOpacity=".316"
          fillRule="evenodd"
          d="M139.393 68.655q-11.355 6.628-17.598 27.159t-11.422 57.402q6.907-23.451 9.165-33.972c2.257-10.52 3.028-25.397 9.021-35.497q5.992-10.1 10.834-15.092"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M104.34 215.306q18.688 2.67 19.543 4.747c.856 2.078-1.577 3.978-8.492 2.701q-6.915-1.277-11.051-7.448"
          clipRule="evenodd"
        ></path>
        <path
          fill="#EDEDED"
          fillOpacity=".603"
          fillRule="evenodd"
          d="M110.599 44.61q-10.278 12.279-17.813 26.035q-7.534 13.758-10.767 20.526q-1.003 5.05-.979 14.9t1.704 21.905q1.471-23.606 9.007-45.827t18.848-37.54"
          clipRule="evenodd"
        ></path>
        <defs>
          <linearGradient
            id="skillIconsElixirLight0"
            x1="130.619"
            x2="123.681"
            y1="43.244"
            y2="227.849"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9D8DC"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity=".385"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsElixirLight1"
            x1="133.755"
            x2="61.246"
            y1="43.198"
            y2="202.116"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D67AF" stopOpacity=".672"></stop>
            <stop offset="1" stopColor="#9F8DAF"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsElixirLight2"
            x1="141.849"
            x2="141.849"
            y1="94.687"
            y2="222.482"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#26053D" stopOpacity=".762"></stop>
            <stop offset="1" stopColor="#B7B4B4" stopOpacity=".278"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsElixirLight3"
            x1="76.278"
            x2="108.812"
            y1="103.33"
            y2="189.51"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#91739F" stopOpacity=".46"></stop>
            <stop offset="1" stopColor="#32054F" stopOpacity=".54"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsElixirLight4"
            x1="163.238"
            x2="73.773"
            y1="209.304"
            y2="135.173"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#463D49" stopOpacity=".331"></stop>
            <stop offset="1" stopColor="#340A50" stopOpacity=".821"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsElixirLight5"
            x1="144.85"
            x2="81.751"
            y1="95.891"
            y2="191.882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#715383" stopOpacity=".145"></stop>
            <stop offset="1" stopColor="#F4F4F4" stopOpacity=".234"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsElixirLight6"
            x1="150.884"
            x2="106.199"
            y1="125.17"
            y2="122.442"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A5A1A8" stopOpacity=".356"></stop>
            <stop offset="1" stopColor="#370C50" stopOpacity=".582"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  crystal: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F4ED" rx="60"></rect>
        <path
          fill="#000"
          d="m226.479 154.975l-71.219 71.077c-.285.285-.712.427-.997.285l-97.286-26.066c-.427-.143-.712-.428-.712-.713l-26.21-97.143c-.142-.427 0-.712.286-.997l71.219-71.077c.285-.285.712-.428.997-.285l97.286 26.066c.428.143.712.428.712.712l26.067 97.144c.285.427.142.712-.143.997m-95.434-77.344l-95.576 25.496c-.143 0-.285.285-.143.427l69.938 69.796c.142.142.427.142.427-.143l25.639-95.434c.142 0-.142-.285-.285-.142"
        ></path>
      </g>
    </svg>
  ),
  zig: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#F7A41D"
          d="M92.118 71.882L70.94 97.765l-10.588-16.47z"
        ></path>
        <path
          fill="#F7A41D"
          d="m92.118 71.883l-15.294 12.94l-5.883 12.942h-7.059v60h10.589l-12.942 5.882l-9.411 20H38V71.883z"
        ></path>
        <path
          fill="#F7A41D"
          d="m74.47 157.765l-22.352 25.882l-9.412-12.941zm29.412-85.883l7.059 16.47l-29.412 9.413z"
        ></path>
        <path
          fill="#F7A41D"
          d="M103.882 71.882h64.706v25.883H81.529l22.353-14.118zm70.589 85.883l-22.353 25.882l-8.236-15.294z"
        ></path>
        <path
          fill="#F7A41D"
          d="m174.47 157.765l-18.823 10.588l-3.53 15.294H87.412v-25.882z"
        ></path>
        <path
          fill="#F7A41D"
          d="M214.47 46L99.176 183.647L41.53 210.706L156.823 71.882zm-10.587 25.882l-1.177 21.177l-21.176 5.882z"
        ></path>
        <path
          fill="#F7A41D"
          d="M218 71.883v111.764h-55.294l16.471-14.117l5.882-11.765h7.059V98.941H181.53l11.764-10.588l10.589-16.47z"
        ></path>
        <path
          fill="#F7A41D"
          d="m185.059 157.765l5.882 17.647l-28.235 8.235z"
        ></path>
      </g>
    </svg>
  ),
  "c#": (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#9B4F96"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7"
      ></path>
      <path
        fill="#68217A"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z"
      ></path>
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8z"
      ></path>
    </svg>
  ),
  "c++": (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#659ad2"
        d="M29 10.232a2.4 2.4 0 0 0-.318-1.244a2.45 2.45 0 0 0-.936-.879q-5.194-2.868-10.393-5.733a2.64 2.64 0 0 0-2.763.024c-1.378.779-8.275 4.565-10.331 5.706A2.29 2.29 0 0 0 3 10.231V21.77a2.4 2.4 0 0 0 .3 1.22a2.43 2.43 0 0 0 .954.9c2.056 1.141 8.954 4.927 10.332 5.706a2.64 2.64 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.44 2.44 0 0 0 .955-.9a2.4 2.4 0 0 0 .3-1.22V10.232"
      ></path>
      <path
        fill="#00599c"
        d="M28.549 23.171a2 2 0 0 0 .147-.182a2.4 2.4 0 0 0 .3-1.22V10.232a2.4 2.4 0 0 0-.318-1.244c-.036-.059-.089-.105-.13-.16L16 16Z"
      ></path>
      <path
        fill="#004482"
        d="M28.549 23.171L16 16L3.451 23.171a2.4 2.4 0 0 0 .809.72c2.056 1.141 8.954 4.927 10.332 5.706a2.64 2.64 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.4 2.4 0 0 0 .808-.719"
      ></path>
      <path
        fill="#fff"
        d="M19.6 18.02a4.121 4.121 0 1 1-.027-4.087l3.615-2.073A8.309 8.309 0 0 0 7.7 16a8.2 8.2 0 0 0 1.1 4.117a8.319 8.319 0 0 0 14.411-.017z"
      ></path>
      <path
        fill="#fff"
        d="M24.076 15.538h-.926v-.921h-.925v.921h-.926v.923h.926v.92h.925v-.92h.926zm3.473 0h-.926v-.921h-.926v.921h-.926v.923h.926v.92h.926v-.92h.926z"
      ></path>
    </svg>
  ),
  c: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997"
      width="2113"
      height="2500"
    >
      <path
        d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z"
        fill="#004482"
      />
      <path
        d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z"
        fill="#00599c"
      />
      <path
        d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z"
        fill="#659ad2"
      />
      <path
        d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z"
        fill="#fff"
      />
    </svg>
  ),
  php: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#000"
          d="M49.158 100.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14H34zM61.56 112.33l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.271.106-2.438.106h-2.226zM116.186 80h14.628l-4.134 20.246h13.144q10.811.213 16.112 4.452q5.406 4.24 3.18 16.112l-7.102 35.298h-14.84l6.784-33.708q1.059-5.3-.636-7.526t-7.314-2.226l-11.766-.106l-8.692 43.566h-14.628zm58.638 20.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14h-14.734zm12.402 12.084l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.272.106-2.438.106h-2.226z"
        ></path>
      </g>
    </svg>
  ),
  ruby: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <linearGradient
        id="deviconOriginalRuby0"
        x1="157.08"
        x2="131.682"
        y1="2382.05"
        y2="2426.892"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#FB7655"></stop>
        <stop offset="0" stopColor="#FB7655"></stop>
        <stop offset=".41" stopColor="#E42B1E"></stop>
        <stop offset=".99" stopColor="#900"></stop>
        <stop offset="1" stopColor="#900"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby0)"
        d="M97.078 83.214L28.34 124.031l89.003-6.04l6.855-89.745z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby1"
        x1="169.731"
        x2="136.998"
        y1="2419.72"
        y2="2441.685"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset=".99" stopColor="#911209"></stop>
        <stop offset="1" stopColor="#911209"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby1)"
        d="m117.488 117.93l-7.649-52.799l-20.837 27.514z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby2"
        x1="143.542"
        x2="110.81"
        y1="2380.69"
        y2="2402.655"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset=".99" stopColor="#911209"></stop>
        <stop offset="1" stopColor="#911209"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby2)"
        d="m117.592 117.93l-56.044-4.399l-32.91 10.385z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby3"
        x1="74.817"
        x2="79.891"
        y1="2435.622"
        y2="2402.644"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".23" stopColor="#E57252"></stop>
        <stop offset=".46" stopColor="#DE3B20"></stop>
        <stop offset=".99" stopColor="#A60003"></stop>
        <stop offset="1" stopColor="#A60003"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby3)"
        d="m28.717 123.928l14.001-45.867l-30.81 6.588z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby4"
        x1="109.719"
        x2="111.589"
        y1="2466.413"
        y2="2432.757"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".23" stopColor="#E4714E"></stop>
        <stop offset=".56" stopColor="#BE1A0D"></stop>
        <stop offset=".99" stopColor="#A80D00"></stop>
        <stop offset="1" stopColor="#A80D00"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby4)"
        d="m88.996 92.797l-12.882-50.46l-36.866 34.558z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby5"
        x1="140.691"
        x2="146.289"
        y1="2497.523"
        y2="2473.401"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".18" stopColor="#E46342"></stop>
        <stop offset=".4" stopColor="#C82410"></stop>
        <stop offset=".99" stopColor="#A80D00"></stop>
        <stop offset="1" stopColor="#A80D00"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby5)"
        d="M121.275 43.047L86.426 14.585l-9.704 31.373z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby6"
        x1="123.6"
        x2="147.719"
        y1="2506.018"
        y2="2518.077"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".54" stopColor="#C81F11"></stop>
        <stop offset=".99" stopColor="#BF0905"></stop>
        <stop offset="1" stopColor="#BF0905"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby6)"
        d="M104.978 4.437L84.481 15.764L71.551 4.285z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby7"
        x1="53.674"
        x2="55.66"
        y1="2444.028"
        y2="2424.153"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".31" stopColor="#DE4024"></stop>
        <stop offset=".99" stopColor="#BF190B"></stop>
        <stop offset="1" stopColor="#BF190B"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby7)"
        d="m3.802 100.034l8.586-15.659L5.442 65.72z"
      ></path>
      <path
        fill="#fff"
        d="m4.981 65.131l6.987 19.821l30.365-6.812L77 45.922l9.783-31.075L71.38 3.969l-26.19 9.802c-8.252 7.675-24.263 22.86-24.84 23.146c-.573.291-10.575 19.195-15.369 28.214z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby8"
        x1="40.026"
        x2="133.345"
        y1="2418.781"
        y2="2514.739"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#BD0012"></stop>
        <stop offset="0" stopColor="#BD0012"></stop>
        <stop offset=".07" stopColor="#fff"></stop>
        <stop offset=".17" stopColor="#fff"></stop>
        <stop offset=".27" stopColor="#C82F1C"></stop>
        <stop offset=".33" stopColor="#820C01"></stop>
        <stop offset=".46" stopColor="#A31601"></stop>
        <stop offset=".72" stopColor="#B31301"></stop>
        <stop offset=".99" stopColor="#E82609"></stop>
        <stop offset="1" stopColor="#E82609"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby8)"
        d="M29.519 29.521c17.882-17.73 40.937-28.207 49.785-19.28c8.843 8.926-.534 30.62-18.418 48.345c-17.884 17.725-40.653 28.779-49.493 19.852c-8.849-8.92.242-31.191 18.126-48.917z"
      ></path>
      <linearGradient
        id="deviconOriginalRuby9"
        x1="111.507"
        x2="83.398"
        y1="2409.102"
        y2="2416.039"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#8C0C01"></stop>
        <stop offset="0" stopColor="#8C0C01"></stop>
        <stop offset=".54" stopColor="#990C00"></stop>
        <stop offset=".99" stopColor="#A80D0E"></stop>
        <stop offset="1" stopColor="#A80D0E"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRuby9)"
        d="m28.717 123.909l13.89-46.012l46.135 14.82c-16.68 15.642-35.233 28.865-60.025 31.192z"
      ></path>
      <linearGradient
        id="deviconOriginalRubya"
        x1="159.785"
        x2="134.814"
        y1="2442.837"
        y2="2465.217"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#7E110B"></stop>
        <stop offset="0" stopColor="#7E110B"></stop>
        <stop offset=".99" stopColor="#9E0C00"></stop>
        <stop offset="1" stopColor="#9E0C00"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRubya)"
        d="m77.062 45.831l11.844 46.911c13.934-14.65 26.439-30.401 32.563-49.883l-44.407 2.972z"
      ></path>
      <linearGradient
        id="deviconOriginalRubyb"
        x1="168.959"
        x2="156.521"
        y1="2483.901"
        y2="2497.199"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#79130D"></stop>
        <stop offset="0" stopColor="#79130D"></stop>
        <stop offset=".99" stopColor="#9E120B"></stop>
        <stop offset="1" stopColor="#9E120B"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRubyb)"
        d="M121.348 43.097c4.74-14.305 5.833-34.825-16.517-38.635l-18.339 10.13l34.856 28.505z"
      ></path>
      <path
        fill="#9E1209"
        d="M3.802 99.828c.656 23.608 17.689 23.959 24.945 24.167l-16.759-39.14l-8.186 14.973z"
      ></path>
      <radialGradient
        id="deviconOriginalRubyc"
        cx="138.703"
        cy="2464.789"
        r="30.601"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#A80D00"></stop>
        <stop offset="0" stopColor="#A80D00"></stop>
        <stop offset=".99" stopColor="#7E0E08"></stop>
        <stop offset="1" stopColor="#7E0E08"></stop>
      </radialGradient>
      <path
        fill="url(#deviconOriginalRubyc)"
        d="M77.128 45.904c10.708 6.581 32.286 19.798 32.723 20.041c.68.383 9.304-14.542 11.261-22.976l-43.984 2.935z"
      ></path>
      <radialGradient
        id="deviconOriginalRubyd"
        cx="96.325"
        cy="2424.465"
        r="40.679"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#A30C00"></stop>
        <stop offset="0" stopColor="#A30C00"></stop>
        <stop offset=".99" stopColor="#800E08"></stop>
        <stop offset="1" stopColor="#800E08"></stop>
      </radialGradient>
      <path
        fill="url(#deviconOriginalRubyd)"
        d="m42.589 77.897l18.57 35.828c10.98-5.955 19.579-13.211 27.454-20.983L42.589 77.897z"
      ></path>
      <linearGradient
        id="deviconOriginalRubye"
        x1="67.509"
        x2="57.373"
        y1="2393.115"
        y2="2427.506"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#8B2114"></stop>
        <stop offset="0" stopColor="#8B2114"></stop>
        <stop offset=".43" stopColor="#9E100A"></stop>
        <stop offset=".99" stopColor="#B3100C"></stop>
        <stop offset="1" stopColor="#B3100C"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRubye)"
        d="m11.914 84.904l-2.631 31.331c4.964 6.781 11.794 7.371 18.96 6.842c-5.184-12.9-15.538-38.696-16.329-38.173z"
      ></path>
      <linearGradient
        id="deviconOriginalRubyf"
        x1="145.272"
        x2="167.996"
        y1="2507.076"
        y2="2497.045"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#B31000"></stop>
        <stop offset="0" stopColor="#B31000"></stop>
        <stop offset=".44" stopColor="#910F08"></stop>
        <stop offset=".99" stopColor="#791C12"></stop>
        <stop offset="1" stopColor="#791C12"></stop>
      </linearGradient>
      <path
        fill="url(#deviconOriginalRubyf)"
        d="m86.384 14.67l36.891 5.177c-1.969-8.343-8.015-13.727-18.32-15.41L86.384 14.67z"
      ></path>
    </svg>
  ),
  perl: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#004065" rx="60"></rect>
        <path
          fill="#fff"
          d="M88.763 227.957c-3.55-.217-6.58-1.096-9.007-2.614c-.826-.517-1.007-.812-1.007-1.64c0-.436.046-.597.285-1.008c.324-.555 1.114-1.235 2.04-1.754c.904-.507 3.468-1.542 4.334-1.751c1.466-.352 2.62-.905 3.72-1.781c1.056-.842 1.976-2.155 2.354-3.359c.096-.306.47-1.088.83-1.739c4.672-8.431 6.603-18.114 5.446-27.301a71 71 0 0 1-.26-2.738c-.346-4.534-.99-8.208-2.182-12.43c-.184-.649-.315-1.339-.351-1.849c-.266-3.705-1.021-8.235-2.065-12.393c-.522-2.078-.558-2.622-.574-8.657c-.016-6.274-.09-7.671-.526-9.766c-.2-.961-.572-2.293-.64-2.293c-.033 0-.336.169-.672.377c-2.5 1.544-5.868 2.784-9.32 3.43a15 15 0 0 0-1.543.375c-.808.265-2.018.33-2.847.154c-1.362-.289-2.53-1.062-3.198-2.114c-.548-.863-1.11-1.077-1.937-.739c-.204.084-.858.533-1.452 1c-1.14.895-1.595 1.142-2.103 1.142c-.391 0-.706-.204-1.084-.703c-.65-.859-4.722-3.897-7.487-5.587a21 21 0 0 1-1.522-1.014c-1.468-1.139-3.483-2.063-5.487-2.514l-.92-.207l-.22-.37c-.216-.366-.218-.389-.195-2.03c.03-2.126-.014-2.28-.845-2.963c-.323-.265-.673-.601-.778-.747c-.341-.471-.906-.553-1.993-.29c-1.78.43-2.117.112-3.16-2.976c-.257-.762-.58-1.614-.72-1.892c-.523-1.054-1.206-1.696-2.296-2.161c-1.129-.481-2.607-2.157-3.362-3.811c-.828-1.813-1.168-3.759-1.369-7.842c-.108-2.212-.228-3.682-.396-4.883c-.616-4.407-.56-10.664.14-15.796l.177-1.295l.774-1.48a116 116 0 0 0 2.883-5.897c.926-2.036 2.204-5.05 2.204-5.2c0-.138-.933-.692-1.745-1.035c-1.473-.623-3.072-.952-6.973-1.435c-1.301-.161-2.836-.382-3.41-.49c-3.315-.628-5.352-1.749-6.737-3.706c-.242-.343-.353-.616-.462-1.147c-.419-2.026.411-4.093 2.604-6.485c.977-1.065 4.91-4.392 5.727-4.843c1.486-.823 2.922-1.123 6.483-1.354c2.345-.153 3.747-.341 4.93-.662c1.025-.278 1.95-.434 3.307-.56c2.716-.252 3.953-.583 4.862-1.3c.47-.372.9-1.001 1.057-1.548c.257-.898 1.137-1.887 2.229-2.504c.24-.136 1.148-.556 2.015-.933c1.81-.786 2.434-1.12 3.11-1.668c.266-.214.561-.423.658-.464c.787-.332 1.959-.415 2.917-.205c.766.167 1.514.467 3.375 1.351c1.562.742 3.043 1.277 3.544 1.278c.395.002 2.92 1.405 4.777 2.654c2.044 1.376 5.73 4.66 6.329 5.636c.19.31.43 1.284.65 2.636c.225 1.376.436 2.09.792 2.686c.255.426.516.674 1.64 1.556c1.066.837 2.226 2.803 2.728 4.625c.534 1.935.678 4.005.557 8.027c-.061 2.045-.059 3.53.008 4.945c.074 1.567.071 2.21-.014 2.861a12.1 12.1 0 0 1-1.368 4.254c-.23.433-.413.912-.474 1.249c-.155.85-.465 1.535-1.542 3.412c-1.47 2.562-1.623 3.057-1.482 4.796c.044.543.053 1.292.02 1.665c-.153 1.7-.184 3.07-.078 3.426c.232.777.793 1.11 1.759 1.04c.313-.022.634-.061.714-.087c.37-.122.886-1.525 1.343-3.663c.34-1.582.653-2.704.886-3.168c.076-.15.508-1.211.962-2.359c1.434-3.628 2.762-6.386 4.377-9.085c2.424-4.054 4.83-6.915 8.026-9.546c1.887-1.553 3.573-2.638 5.684-3.656a17 17 0 0 0 2.232-1.321c1.34-.935 4.093-3.192 5.299-4.344c3.969-3.795 7.088-8.18 9.159-12.879c.638-1.446.844-1.755 1.824-2.741c.903-.909 1.892-1.75 4.108-3.494c2.834-2.23 3.902-3.244 4.979-4.722l.572-.784l1.794-.352c3.379-.661 7.325-1.641 8.453-2.099a93 93 0 0 0 2.753-1.255c2.351-1.106 3.818-1.668 5.089-1.949c.693-.153 1.155-.195 2.76-.25c3.068-.103 5.168-.29 8-.71c1.581-.234 1.298-.27 4.266.549c1.972.544 4.814 1.463 6.232 2.016c1.138.444 2.816 1.461 4.602 2.79c4.639 3.453 8.096 8.447 9.41 13.598c.331 1.3 1.476 3.799 2.635 5.754c1.725 2.91 3.593 5.341 8.455 11.004c2.771 3.228 4.026 4.75 5.155 6.252c2.265 3.011 3.874 5.711 4.917 8.25c.209.508.729 1.503 1.155 2.21c3.9 6.473 8.905 12.466 14.834 17.763a10.8 10.8 0 0 1 2.128 2.528c1.187 1.895 1.9 4.019 2.684 7.99c.459 2.322.715 3.449 1.063 4.666c.309 1.085.311 1.088.87 1.688c1.458 1.562 1.774 3.199.78 4.039c-.343.29-.994.548-1.383.548c-.162 0-.169.039-.122.648c.027.356.21 1.276.407 2.044s.401 1.701.455 2.072c.177 1.221-.049 2.317-.651 3.155c-.162.225-.443.824-.626 1.332c-1.517 4.22-3.651 8.664-6.412 13.352l-1.456 2.476c-.603 1.034-1.918 1.852-2.975 1.852c-.44 0-.54-.029-.825-.24c-.461-.342-.621-.711-.778-1.799a84 84 0 0 0-.394-2.363c-.381-2.098-.523-3.142-.582-4.291c-.115-2.229.389-4.082 1.494-5.502c.485-.622.583-.866.879-2.193c.41-1.835.578-4.035.473-6.197c-.099-2.049-.531-4.292-1.181-6.121c-.32-.904-.327-.95-.303-1.961c.064-2.682-.68-5.137-2.238-7.38c-.219-.316-.433-.592-.475-.614c-.14-.073-.862.567-1.078.955c-.281.505-.457 1.248-.624 2.637c-.076.63-.215 1.396-.307 1.701c-.203.665-.444 1.953-.741 3.959c-1.538 10.377-1.082 20.444 1.4 30.852c.262 1.099.516 2.298.565 2.664c.127.951.11 2.941-.04 4.668c-.277 3.19-.32 4.231-.221 5.387c.148 1.732.231 2.004.812 2.646c1.288 1.425 1.77 2.799 1.761 5.019c-.006 1.496-.131 2.281-.857 5.438c-.262 1.139-.557 2.587-.655 3.218a164 164 0 0 1-.437 2.627c-1.401 8.006-.673 16.235 2.117 23.934c.289.797.428 1.349.538 2.146c.29 2.087.842 4.453 1.537 6.592l.346 1.066l-.269.407c-1.223 1.844-3.249 3.169-5.744 3.754c-.782.184-.987.201-2.346.198c-1.619-.004-2.096-.08-3.286-.521c-.562-.208-.588-.21-1.928-.18c-3.041.07-3.864.046-4.304-.123a2.53 2.53 0 0 1-1.268-1.086c-.381-.69-.245-2.05.334-3.337c.147-.326.694-1.342 1.215-2.26c1.322-2.322 1.745-3.48 1.745-4.769c0-.218.116-.775.257-1.236c.914-2.995 1.759-6.91 2.192-10.158c.928-6.965.752-13.524-.557-20.801c-.423-2.347-.528-3.197-.885-7.129c-.467-5.148-.802-7.356-1.463-9.645c-.26-.901-.304-.987-.841-1.627c-3.841-4.58-6.399-9.142-8.241-14.697c-.236-.713-.753-2.011-1.148-2.886c-1.729-3.826-3.542-8.727-4.741-12.818c-.105-.356-.215-.647-.245-.647s-.12.092-.199.203l-.888 1.246c-4.479 6.27-7.198 13.3-8.084 20.895c-.19 1.63-.264 5.674-.133 7.25c.057.672.139 1.904.183 2.738c.058 1.075.182 2.099.427 3.514c.607 3.508.658 4.645.269 6.03c-.227.808-.84 1.854-1.395 2.379c-.24.228-1.396 1.625-2.57 3.105s-2.903 3.657-3.842 4.837c-4.557 5.729-6.841 9.465-8.275 13.536c-.603 1.711.109 2.794 2.729 4.151c2.379 1.233 2.914 1.673 3.681 3.03a23.6 23.6 0 0 1 2.798 8.108c.156 1.027.276 3.923.184 4.439c-.059.332-.064.336-.692.567c-.348.128-1.145.431-1.771.673c-2.794 1.081-4.38 1.266-5.796.677c-.769-.32-1.24-.803-2.447-2.509c-1.5-2.122-4.645-6.103-4.944-6.259c-.228-.118-.641 1.2-.964 3.071c-.395 2.295-.75 3.147-1.611 3.872c-.583.49-1.05.697-2.506 1.11c-3.343.946-6.577 1.383-10.241 1.384c-2.417 0-3.778-.103-6.086-.462c-1.025-.159-1.041-.165-1.334-.468c-1.187-1.223-.767-2.857 1.125-4.375c1.147-.92 1.777-1.242 4.02-2.056c2.385-.866 4.545-2.52 5.947-4.554c.396-.575 1.134-2.021 1.136-2.225c0-.064.182-.314.404-.555c.518-.563.792-1.023.954-1.602c.356-1.275-.06-2.528-1.165-3.511c-.275-.245-.94-.875-1.478-1.4c-1.221-1.193-4.18-3.658-6.031-5.026a419 419 0 0 0-4.468-3.213c-4.715-3.348-6.493-4.698-8.588-6.522c-1.173-1.021-1.608-1.532-2.228-2.618c-1.9-3.328-2.065-7.647-.523-13.651c.226-.88.333-1.127.897-2.072a13 13 0 0 0 1.515-3.655c.341-1.357.389-3.371.121-5.013c-.305-1.868-.21-2.627.668-5.335c.539-1.659.779-2.581.869-3.322l.059-.494l-.425-.058c-.658-.09-4.177-.065-5.157.037a35 35 0 0 0-4.612.782l-.486.119l-.058 2.199c-.102 3.88-.508 8.355-1.065 11.727c-.113.682-.14.742-.485 1.073c-.865.829-2.029 2.534-2.563 3.753c-.523 1.197-.794 2.227-.939 3.582c-.094.871-.117.944-.443 1.401c-.414.579-.63 1.05-.841 1.831c-.134.499-.162 1.031-.191 3.618c-.046 4.222-.046 4.137.028 6.363c.053 1.599.038 2.242-.074 3.219a24.4 24.4 0 0 1-2.522 8.385c-.752 1.486-1.411 3.64-1.949 6.375c-.506 2.569-.713 4.236-1.236 9.951c-.338 3.697-.484 5.043-.748 6.881c-.414 2.88-1.178 6.15-1.561 6.681c-.524.728-.647 1.646-.501 3.751c.172 2.489.005 3.258-.881 4.067c-.57.52-1.156.787-2.574 1.173c-3.296.897-6.954 1.307-10.006 1.121m67.46-43.035c.317-.127.774-.643.872-.985c.029-.102.297-.501.595-.888c2.527-3.273 4.267-6.871 5.17-10.691c.394-1.664.556-2.785.675-4.661c.088-1.389.078-1.809-.094-3.959c-.758-9.459-2.05-18.966-3.738-27.519c-.244-1.235-.433-1.996-.514-2.064c-.175-.148-.584-.002-1.089.39c-.73.568-1.042 1.361-1.326 3.371c-.186 1.314-.326 1.899-.577 2.406c-.226.455-.451 1.45-.695 3.07c-.474 3.14-1.052 4.345-2.45 5.109c-.462.252-.612.385-.783.69c-.488.872-.762 1.846-.969 3.45c-.388 3.003-.601 3.899-1.142 4.807l-.324.543l.14.932c.231 1.54.126 2.63-.324 3.376c-.438.726-.93.964-2.202 1.065c-1.471.118-2.244.585-3.842 2.324c-.481.523-1.11 1.139-1.399 1.369c-1.005.8-2.472 2.933-2.883 4.191c-.285.873-.266 1.875.05 2.664c.279.695.525 1.048 1.493 2.145a78 78 0 0 1 2.081 2.553c1.504 1.918 2.481 2.956 3.377 3.588c1.31.926 2.447 1.324 4.226 1.483c1.281.114 1.113.071 2.673.686c.674.266 1.384.525 1.577.577c.496.132 1.061.123 1.422-.022"
        ></path>
      </g>
    </svg>
  ),
  lua: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <g clipPath="url(#skillIconsLuaLight0)">
          <path
            fill="navy"
            d="M204.453 128.02c0-42.196-34.258-76.45-76.453-76.45s-76.453 34.254-76.453 76.45c0 42.199 34.258 76.453 76.453 76.453s76.453-34.254 76.453-76.453"
          ></path>
          <path
            fill="#fff"
            d="M182.066 96.344c0-12.356-10.031-22.387-22.386-22.387c-12.356 0-22.387 10.031-22.387 22.387c0 12.351 10.031 22.386 22.387 22.386s22.386-10.035 22.386-22.386"
          ></path>
          <path
            fill="navy"
            d="M226.84 51.547c0-12.356-10.031-22.387-22.387-22.387s-22.387 10.031-22.387 22.387s10.032 22.387 22.387 22.387s22.387-10.008 22.387-22.387"
          ></path>
          <path
            fill="#fff"
            d="M82.508 160.586h24.773v5.641H76.109v-50.161h6.399zm54.363 5.641v-5.028c-3.379 4.754-6.738 6.61-12.039 6.61c-7.012 0-11.488-3.844-11.488-9.84v-27.793h5.703v25.531c0 4.332 2.89 7.098 7.433 7.098c5.977 0 9.84-4.817 9.84-12.188v-20.441h5.703v36.051zm47.074.972c-1.859.485-2.746.61-3.929.61c-3.715 0-5.512-1.645-5.914-5.301c-4.055 3.719-7.707 5.301-12.247 5.301c-7.289 0-11.828-4.118-11.828-10.664c0-4.688 2.133-7.918 6.336-9.629c2.196-.887 3.442-1.164 11.551-2.2c4.543-.546 5.977-1.582 5.977-3.988v-1.523c0-3.442-2.891-5.364-8.043-5.364c-5.368 0-7.985 1.985-8.469 6.399h-5.789c.148-3.57.824-5.637 2.472-7.496c2.407-2.684 6.735-4.203 11.973-4.203c8.871 0 13.559 3.441 13.559 9.839v21.208c0 1.792 1.097 2.828 3.105 2.828c.336 0 .614 0 1.246-.149zm-10.054-18.797c-1.922.887-3.168 1.16-9.227 1.985c-6.125.886-8.68 2.828-8.68 6.609c0 3.656 2.618 5.789 7.094 5.789c3.379 0 6.188-1.101 8.535-3.234c1.707-1.582 2.278-2.742 2.278-4.688z"
          ></path>
          <path
            stroke="gray"
            strokeDasharray="8.63 8.63"
            strokeMiterlimit="10"
            strokeWidth="2.294"
            d="M216.09 83.121A98.9 98.9 0 0 1 226.859 128c0 54.574-44.285 98.859-98.859 98.859S29.14 182.574 29.14 128S73.427 29.14 128 29.14a98.93 98.93 0 0 1 49.883 13.497"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsLuaLight0">
            <path fill="#fff" d="M28 28h200v200H28z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  html: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#E44D26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
      ></path>
      <path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"></path>
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
      ></path>
    </svg>
  ),
  css: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#1572B6"
        d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543l-45.119-12.526z"
      ></path>
      <path
        fill="#33A9DC"
        d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16v106.49z"
      ></path>
      <path
        fill="#fff"
        d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95V51.429z"
      ></path>
      <path
        fill="#EBEBEB"
        d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018v-14.39z"
      ></path>
      <path
        fill="#fff"
        d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881H81.127z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711h16.447z"
      ></path>
    </svg>
  ),
  sass: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#CD6799" rx="60"></rect>
        <g clipPath="url(#skillIconsSass0)">
          <path
            fill="#fff"
            d="M200.107 139.163c-6.974.036-13.034 1.716-18.109 4.198c-1.862-3.687-3.724-6.973-4.053-9.383c-.365-2.811-.803-4.527-.365-7.886s2.41-8.141 2.373-8.506s-.438-2.081-4.454-2.118s-7.484.767-7.886 1.826c-.402 1.058-1.168 3.468-1.679 5.951c-.694 3.651-8.033 16.685-12.231 23.512c-1.351-2.665-2.519-5.002-2.775-6.864c-.365-2.811-.803-4.527-.365-7.886s2.41-8.142 2.373-8.507s-.438-2.081-4.454-2.117s-7.485.766-7.886 1.825c-.402 1.059-.84 3.542-1.68 5.951c-.839 2.41-10.587 24.17-13.143 29.792a168 168 0 0 1-3.249 6.754s-.037.11-.146.292a91 91 0 0 1-1.096 2.081v.037c-.547.986-1.132 1.898-1.424 1.898c-.219 0-.62-2.628.073-6.206c1.461-7.558 4.929-19.314 4.893-19.715c0-.219.657-2.264-2.264-3.323c-2.848-1.059-3.87.694-4.126.694c-.255 0-.438.621-.438.621s3.177-13.217-6.06-13.217c-5.769 0-13.728 6.316-17.67 12.012a5003 5003 0 0 0-13.437 7.338c-2.153 1.205-4.38 2.41-6.462 3.542c-.146-.146-.292-.329-.438-.475c-11.172-11.939-31.836-20.372-30.96-36.4c.329-5.842 2.337-21.176 39.686-39.796c30.741-15.151 55.203-10.953 59.438-1.643c6.06 13.29-13.107 37.97-44.87 41.548c-12.122 1.351-18.474-3.322-20.08-5.074c-1.68-1.826-1.936-1.935-2.557-1.57c-1.022.547-.365 2.19 0 3.139c.95 2.483 4.856 6.864 11.464 9.018c5.842 1.899 20.044 2.958 37.24-3.687c19.241-7.448 34.283-28.15 29.865-45.491c-4.417-17.598-33.625-23.403-61.263-13.582c-16.43 5.842-34.246 15.042-47.061 27.017c-15.225 14.24-17.634 26.616-16.648 31.8c3.541 18.401 28.915 30.376 39.065 39.248c-.511.292-.986.548-1.387.767c-5.075 2.519-24.425 12.632-29.245 23.33c-5.476 12.121.877 20.81 5.075 21.978c13.034 3.615 26.433-2.884 33.626-13.618s6.316-24.68 2.993-31.069a.8.8 0 0 0-.146-.219c1.315-.767 2.665-1.57 3.98-2.337a196 196 0 0 1 7.338-4.126c-1.241 3.396-2.154 7.448-2.592 13.29c-.547 6.864 2.264 15.772 5.951 19.277c1.643 1.533 3.578 1.57 4.82 1.57c4.308 0 6.243-3.578 8.397-7.813c2.628-5.185 5.002-11.209 5.002-11.209s-2.958 16.284 5.074 16.284c2.921 0 5.878-3.797 7.193-5.732v.036s.073-.109.219-.365c.292-.475.474-.767.474-.767v-.073c1.169-2.044 3.797-6.681 7.704-14.385c5.038-9.93 9.894-22.343 9.894-22.343s.438 3.03 1.935 8.068c.876 2.958 2.702 6.207 4.162 9.347c-1.168 1.643-1.898 2.555-1.898 2.555l.036.037c-.949 1.241-1.971 2.592-3.103 3.906c-3.98 4.747-8.726 10.187-9.383 11.757c-.767 1.862-.584 3.212.876 4.308c1.059.803 2.957.912 4.892.803c3.578-.256 6.098-1.132 7.339-1.68c1.935-.693 4.199-1.752 6.316-3.322c3.907-2.884 6.28-7.01 6.061-12.45c-.11-2.994-1.096-5.987-2.3-8.799c.365-.511.693-1.022 1.058-1.533c6.171-9.018 10.953-18.912 10.953-18.912s.438 3.03 1.935 8.069c.73 2.555 2.227 5.33 3.542 8.032c-5.805 4.71-9.383 10.186-10.661 13.764c-2.3 6.645-.511 9.638 2.884 10.332c1.534.329 3.724-.401 5.331-1.095c2.044-.657 4.454-1.789 6.754-3.469c3.906-2.884 7.667-6.9 7.448-12.34c-.11-2.482-.767-4.929-1.68-7.302c4.929-2.044 11.282-3.176 19.387-2.227c17.379 2.045 20.811 12.888 20.153 17.452c-.657 4.563-4.308 7.046-5.513 7.813c-1.204.767-1.606 1.022-1.496 1.57c.146.803.73.766 1.752.62c1.424-.255 9.127-3.687 9.456-12.084c.548-10.734-9.675-22.454-27.747-22.344M66.043 184.362c-5.768 6.279-13.8 8.653-17.269 6.645c-3.724-2.155-2.264-11.428 4.82-18.073c4.307-4.052 9.857-7.813 13.544-10.113c.84-.511 2.081-1.241 3.578-2.154c.256-.146.402-.219.402-.219l.876-.548c2.592 9.493.11 17.854-5.95 24.462m41.986-28.551c-2.008 4.893-6.206 17.415-8.762 16.722c-2.19-.585-3.541-10.077-.438-19.46c1.57-4.71 4.892-10.332 6.827-12.523c3.14-3.505 6.608-4.673 7.448-3.249c1.059 1.862-3.833 15.443-5.075 18.51m34.648 16.576c-.84.438-1.643.73-2.008.511c-.256-.146.365-.73.365-.73s4.345-4.674 6.061-6.791c.985-1.242 2.154-2.702 3.395-4.345v.475c0 5.586-5.403 9.346-7.813 10.88m26.725-6.098c-.621-.438-.511-1.898 1.57-6.462c.803-1.789 2.702-4.782 5.951-7.667c.365 1.169.621 2.3.584 3.359c-.036 7.047-5.075 9.675-8.105 10.77"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsSass0">
            <path fill="#fff" d="M28 53h200v149.909H28z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  bootstrap: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 204 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#7E13F8"
        d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17zM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.34 4.34 0 0 1-4.338-4.339V52.068a4.34 4.34 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537m-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636m-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782z"
      ></path>
    </svg>
  ),
  webpack: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#8ed6fb"
        d="M117.29 98.1L66.24 127v-22.51L98 87zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15l18.54-10.71z"
      ></path>
      <path
        fill="#1c78c0"
        d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66L95.5 44L64 62.16z"
      ></path>
    </svg>
  ),
  rollup: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="url(#skillIconsRollupjsLight0)"
          d="M203.708 94.3c0-11.7-3.1-22.6-8.4-32.1c-14.3-14.7-45.3-18.1-53-.1c-7.9 18.5 13.3 39 22.6 37.4c11.8-2.1-2.1-29.1-2.1-29.1c18 34 13.9 23.6-18.7 54.8s-66 97.1-70.9 99.9c-.2.1-.4.2-.7.3h127.9c2.3 0 3.7-2.4 2.7-4.4l-33.4-66.2c-.7-1.4-.2-3.2 1.2-4c19.6-11.2 32.8-32.3 32.8-56.5"
        ></path>
        <path
          fill="url(#skillIconsRollupjsLight1)"
          d="M203.708 94.3c0-11.7-3.1-22.6-8.4-32.1c-14.3-14.7-45.3-18.1-53-.1c-7.9 18.5 13.3 39 22.6 37.4c11.8-2.1-2.1-29.1-2.1-29.1c18 34 13.9 23.6-18.7 54.8s-66 97.1-70.9 99.9c-.2.1-.4.2-.7.3h127.9c2.3 0 3.7-2.4 2.7-4.4l-33.4-66.2c-.7-1.4-.2-3.2 1.2-4c19.6-11.2 32.8-32.3 32.8-56.5"
        ></path>
        <path
          fill="url(#skillIconsRollupjsLight2)"
          d="M73.208 225.1c4.9-2.8 38.2-68.7 70.8-99.9s36.8-20.8 18.7-54.8c0 0-69 96.8-94 144.7"
        ></path>
        <path
          fill="url(#skillIconsRollupjsLight3)"
          d="M82.908 138.3c46.6-85.7 52.7-94.4 77-94.4c12.8 0 25.6 5.8 34 16c-11.3-18.3-31.4-30.5-54.4-30.9h-79.2c-1.7 0-3 1.4-3 3v159.7c4.7-12.1 12.7-29.5 25.6-53.4"
        ></path>
        <path
          fill="url(#skillIconsRollupjsLight4)"
          d="M144.008 125.2c-32.6 31.2-65.9 97.1-70.8 99.9s-13 3.1-17.3-1.7c-4.6-5.2-11.8-13.5 27.1-85c46.6-85.7 52.7-94.4 77-94.4c12.8 0 25.6 5.8 34 16c.5.7.9 1.5 1.4 2.3c-14.3-14.7-45.3-18.1-53-.1c-7.9 18.5 13.3 39 22.6 37.4c11.8-2.1-2.1-29.1-2.1-29.1c17.9 33.8 13.7 23.4-18.9 54.7"
        ></path>
        <path
          fill="url(#skillIconsRollupjsLight5)"
          d="M86.708 142.2c46.6-85.7 52.7-94.4 77-94.4c10.5 0 21.1 3.9 29.1 11c-8.3-9.5-20.7-14.8-33-14.8c-24.3 0-30.4 8.6-77 94.4c-38.9 71.5-31.7 79.8-27.1 85c.7.7 1.4 1.4 2.2 1.9c-3.9-6-5.7-19.7 28.8-83.1"
          opacity=".3"
        ></path>
        <defs>
          <linearGradient
            id="skillIconsRollupjsLight0"
            x1="107.722"
            x2="161.152"
            y1="134.557"
            y2="147.047"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6533"></stop>
            <stop offset=".157" stopColor="#FF5633"></stop>
            <stop offset=".434" stopColor="#FF4333"></stop>
            <stop offset=".714" stopColor="#FF3733"></stop>
            <stop offset="1" stopColor="#F33"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsRollupjsLight1"
            x1="99.36"
            x2="195.118"
            y1="116.847"
            y2="191.094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BF3338"></stop>
            <stop offset="1" stopColor="#F33"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsRollupjsLight2"
            x1="102.491"
            x2="116.369"
            y1="131.464"
            y2="146.036"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6533"></stop>
            <stop offset=".157" stopColor="#FF5633"></stop>
            <stop offset=".434" stopColor="#FF4333"></stop>
            <stop offset=".714" stopColor="#FF3733"></stop>
            <stop offset="1" stopColor="#F33"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsRollupjsLight3"
            x1="127.725"
            x2="123.561"
            y1="156.549"
            y2="96.874"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6533"></stop>
            <stop offset=".157" stopColor="#FF5633"></stop>
            <stop offset=".434" stopColor="#FF4333"></stop>
            <stop offset=".714" stopColor="#FF3733"></stop>
            <stop offset="1" stopColor="#F33"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsRollupjsLight4"
            x1="109.686"
            x2="129.399"
            y1="130.442"
            y2="143.847"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBB040"></stop>
            <stop offset="1" stopColor="#FB8840"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsRollupjsLight5"
            x1="129.884"
            x2="109.761"
            y1="54.651"
            y2="276.003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  parcel: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 193 256"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosParcelIcon0"
          x1="49.385%"
          x2="50.286%"
          y1="49.503%"
          y2="50.417%"
        >
          <stop offset="0%"></stop>
          <stop offset="100%" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon1"
          x1="50.147%"
          x2="49.946%"
          y1="49.935%"
          y2="50.142%"
        >
          <stop offset="0%"></stop>
          <stop offset="100%" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon2"
          x1="81.503%"
          x2="93.734%"
          y1="46.547%"
          y2="50.202%"
        >
          <stop offset="0%" stopColor="#C37A44"></stop>
          <stop offset="44.42%" stopColor="#BB713D"></stop>
          <stop offset="64.06%" stopColor="#A05728"></stop>
          <stop offset="100%" stopColor="#964E23"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon3"
          x1="63.475%"
          x2="41.388%"
          y1="61.32%"
          y2="43.414%"
        >
          <stop offset="0%" stopColor="#E9B880"></stop>
          <stop offset="100%" stopColor="#E4AF76"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon4"
          x1="50.894%"
          x2="49.16%"
          y1="51.117%"
          y2="49.274%"
        >
          <stop offset="0%" stopColor="#C37A45" stopOpacity="0"></stop>
          <stop offset="13.34%" stopColor="#C37A45"></stop>
          <stop offset="29.45%" stopColor="#D08D55"></stop>
          <stop offset="50.21%" stopColor="#DEA167"></stop>
          <stop offset="69.66%" stopColor="#E8AF73"></stop>
          <stop offset="86.31%" stopColor="#ECB477"></stop>
          <stop offset="100%" stopColor="#ECB477" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon5"
          x1="47.423%"
          x2="22.315%"
          y1="28.937%"
          y2="77.493%"
        >
          <stop offset="8.81%" stopColor="#AF6938"></stop>
          <stop offset="48.29%" stopColor="#9A5227"></stop>
          <stop offset="77.92%" stopColor="#8D4520"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon6"
          x1="41.147%"
          x2="56.579%"
          y1="57.288%"
          y2="44.95%"
        >
          <stop offset="3.27%" stopColor="#E4AF76"></stop>
          <stop offset="100%" stopColor="#E9B880"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon7"
          x1="49.624%"
          x2="50.677%"
          y1="50.47%"
          y2="49.223%"
        >
          <stop offset="0%" stopColor="#AF6A38" stopOpacity="0"></stop>
          <stop offset="8.6%" stopColor="#AF6A38"></stop>
          <stop offset="19.77%" stopColor="#B87542"></stop>
          <stop offset="58.28%" stopColor="#D59C66"></stop>
          <stop offset="77.71%" stopColor="#E4AF76"></stop>
          <stop offset="92.39%" stopColor="#E4AF76" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon8"
          x1="8.211%"
          x2="93.243%"
          y1="50.006%"
          y2="50.006%"
        >
          <stop offset="0%" stopColor="#743F1A" stopOpacity="0"></stop>
          <stop offset="49.29%" stopColor="#743F1A" stopOpacity=".887"></stop>
          <stop offset="50%" stopColor="#743F1A" stopOpacity=".9"></stop>
          <stop offset="52.97%" stopColor="#743F1A" stopOpacity=".847"></stop>
          <stop offset="100%" stopColor="#743F1A" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcon9"
          x1="49.901%"
          x2="49.998%"
          y1="50.091%"
          y2="49.994%"
        >
          <stop offset="0%" stopColor="#322214"></stop>
          <stop offset="23.97%" stopColor="#322314" stopOpacity=".989"></stop>
          <stop offset="100%" stopColor="#322214" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcona"
          x1="51.38%"
          x2="48.714%"
          y1="48.236%"
          y2="51.568%"
        >
          <stop offset="4.76%" stopColor="#C69866"></stop>
          <stop offset="41.56%" stopColor="#BA8C5E"></stop>
          <stop offset="81.35%" stopColor="#B5875B"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIconb"
          x1="63.039%"
          x2="24.984%"
          y1="46.844%"
          y2="8.907%"
        >
          <stop offset="0%" stopColor="#845F35"></stop>
          <stop offset="43.11%" stopColor="#91673C"></stop>
          <stop offset="44.07%" stopColor="#976A40"></stop>
          <stop offset="87.37%" stopColor="#986B40"></stop>
          <stop offset="100%" stopColor="#AB8157"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIconc"
          x1="49.999%"
          x2="50.108%"
          y1="50.004%"
          y2="50.114%"
        >
          <stop offset="0%" stopColor="#322214" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#322214"></stop>
        </linearGradient>
        <linearGradient
          id="logosParcelIcond"
          x1="45.656%"
          x2="50.475%"
          y1="62.623%"
          y2="33.538%"
        >
          <stop offset="0%" stopColor="#A9794B"></stop>
          <stop offset="38.57%" stopColor="#AE7F53"></stop>
          <stop offset="45.57%" stopColor="#AC7D50"></stop>
          <stop offset="62.36%" stopColor="#A9794B"></stop>
          <stop offset="100%" stopColor="#B2875D"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosParcelIcon0)"
        d="m140.515 191.333l70.257-44.428c.26-.16.6-.09.76.17s.09.6-.17.76l-70.487 44.568c-.09.06-.19.09-.29.09z"
      ></path>
      <path
        fill="url(#logosParcelIcon1)"
        d="M140.585 192.493c-.06 0-.13-.01-.19-.03l-95.787-35.699a.543.543 0 0 1-.32-.71c.11-.29.42-.43.71-.32l95.537 35.599z"
      ></path>
      <path
        fill="#E8B67F"
        d="m241.1 21.81l-11.059 18.309l-44.428 18.89l-2.47 1.05l-39.929 37.338c-.77.77-1.29 1.87-1.38 2.48c-.04.21-.22.12-.39.11c-.18-.01-.43.06-.45-.16c-.02-.8-.11-1.69-1.4-2.49l-20.009-12.96l-14.59-9.46l-41.097-10.539l-34.4-8.82L7.71 21.71l.33-.38l.02-.03L89.857.04c.12-.04.14-.02.19.05l27.898 41.789l.55.82c.6.88.66 1.42.66 1.81h.51v-.09c0-.04 0-.09.01-.14c0-.03.01-.06.01-.1c.01-.04.01-.08.02-.12s.01-.08.02-.13c.03-.14.07-.3.11-.46c.01-.05.03-.1.04-.14c.05-.16.1-.33.16-.49c.03-.06.05-.13.08-.19c.08-.2.16-.38.25-.54c.08-.16.16-.29.24-.4l25.15-36.579c.06-.09.09-.13.22-.11l94.966 16.34z"
      ></path>
      <path
        fill="url(#logosParcelIcon2)"
        d="M119.585 84.367h-.01l-14.579-9.449l-41.098-10.54l55.257-19.869l.15-.29v.29z"
      ></path>
      <path
        fill="url(#logosParcelIcon3)"
        d="M119.155 44.509L63.898 64.368l-4.98-1.28l-29.42-7.55L7.71 21.69l.35-.41L89.857.02c.12-.04.14-.02.19.05l27.898 41.789l.55.82c.6.9.66 1.44.66 1.83"
      ></path>
      <path
        fill="url(#logosParcelIcon4)"
        d="M119.35 46.619L67.102 65.398l-8.15-2.09l59.028-21.22l.55.82c.6.88.66 1.42.66 1.81h.15z"
      ></path>
      <path
        fill="#D2A679"
        d="m30.249 55.738l-.74-.19L7.72 21.7l.33-.38z"
      ></path>
      <path
        fill="url(#logosParcelIcon5)"
        d="m185.613 59.008l-2.47 1.05l-39.929 37.339c-.77.77-1.29 1.87-1.38 2.48c-.04.21-.22.12-.39.11c-.18-.01-.43.06-.45-.16c-.02-.8-.11-1.69-1.4-2.49l-20.009-12.97l-.27-39.848v-.29l.37.29z"
      ></path>
      <path
        fill="url(#logosParcelIcon6)"
        d="m241.1 21.81l-11.059 18.309l-40.438 17.19l-3.98 1.69l-65.948-14.49c-.04-.51.31-1.67.69-2.41c.08-.16.16-.29.24-.4l25.15-36.579c.06-.09.09-.13.22-.11l94.966 16.34z"
      ></path>
      <path
        fill="url(#logosParcelIcon7)"
        d="m189.603 57.308l-6.45 2.74l-.83.8l-63.018-13.93l.29-2.42h.08c-.04-.51.31-1.67.69-2.41z"
      ></path>
      <path
        fill="url(#logosParcelIcon8)"
        d="M121.055 44.809v40.508l-1.47-.95h-.01l-1.93-1.26V45.049l1.51-.54h.51z"
        opacity=".75"
      ></path>
      <path
        fill="#BF9064"
        d="m140.195 191.843l-95.867-35.769c-.54-.23-.62-.74-.65-1.37c0 0-4.12-81.696-4.13-81.706c-.01-.21.25-.34.23-.47c-.07-.31-.66-1.48-.85-1.6L0 48.808l.33-.75l104.666 26.86l34.589 22.409c1.29.8 1.39 1.69 1.4 2.49c.01.22.27.15.45.16s.35.1.39-.11c.09-.61.61-1.71 1.38-2.47l39.928-37.339L255.54 29.28l.44.61l-39.088 34.349c-.76.76-1.11 1.69-.96 2.07l-4 80.067c-.06.51-.3.66-.81 1.01l-70.077 44.358c-.28.18-.58.23-.85.1"
      ></path>
      <path
        fill="#BD8F63"
        d="m141.434 99.977l-.69 91.906a.83.83 0 0 1-.56-.04l-95.866-35.759c-.54-.23-.62-.75-.65-1.37l-4.13-81.706v-.02c0-.02 0-.04.01-.06c0-.02.01-.03.02-.04c.01-.02.02-.03.03-.05s.02-.03.03-.05c.04-.06.1-.12.12-.17c.01-.01.01-.02.01-.03v-.01l101.237 27.279c.04.18.28.11.44.12"
      ></path>
      <path
        fill="url(#logosParcelIcon9)"
        d="M140.755 191.613v.26a.83.83 0 0 1-.56-.04l-95.867-35.759c-.38-.16-.53-.47-.6-.85z"
        opacity=".54"
      ></path>
      <path
        fill="#322214"
        d="m97.406 135.865l37.119 12.14l-.09 36.198l-36.429-13.38zm18.6 24.32l.09 16.769l17.978 6.604v-17.094zm5.311 5.417l3.633 5.782l3.559-3.118l.62.707l-3.673 3.217l3.681 5.858l-.533.335l-3.628-5.773l-3.541 3.104l-.62-.707l3.655-3.203l-3.686-5.867zm10.698 6.512v1.65l.95.31v1.86l-.95-.38v1.5l-2.08-3.16zm-3.2-2.01l.73.23v6.59l-.73-.26zm-30.679-16.13l.27 16.51l17.18 6.28l-.1-16.73zm26.86 19.68l1.88 3.03l-3.75-1.36zm2.899-2.78v4.3l-1.95-2.75zm-7.44-3.83l.72.24v6.58l-.72-.25zm1.62 1.77l1.86 2.87l-1.86 1.43zm-15.54-7.97l.71.23l.002.422c2.114.85 4.202 2.97 5.209 6.268c-.66-1.11-1.24-1.32-2.27-.97c-.38-.79-1.5-1.21-2.17-.79a1.93 1.93 0 0 0-.746-.776l.036 6.276c0 .58-.4 1.1-1.39.9c-.9-.22-1.27-.91-1.17-2.09l.5.08c0 .79.06 1.24.66 1.38c.51.12.74-.07.74-.54l-.066-6.225c-.284-.02-.547.05-.734.215c-.23-.58-1.32-1.36-2.14-.78c-.58-.92-1.67-1.27-2.28-.6c.779-2.355 2.894-3.18 5.113-2.585zm11.38 6.13l2.03 3.2l-2.01 1.67l.04-1.57l-.98-.23v-1.82l.92.34zm5.15.69l3.8 1.38l-1.9 1.67zm-7.09-25.2l.04 17.1l18.07 6.3v-17.47zm3.37 14.77l10.8 3.69v2.15l-10.8-3.72zm-9.338 4.069l.039.011c.07.07.07.82-.16.99a.41.41 0 0 1-.42-.05c-.14-.11-.22-.27-.16-.51s.66-.5.74-.43zm1-1.71l.039.011c.08.07.08.82-.16.99a.41.41 0 0 1-.42-.05c-.14-.11-.22-.27-.16-.51s.66-.5.74-.43zm-2.8-.07l.039.011c.08.07.08.82-.16.99a.41.41 0 0 1-.42-.05c-.14-.11-.22-.27-.16-.51s.66-.5.74-.43zm-2.83-.41l.039.011c.08.07.08.82-.16.99a.41.41 0 0 1-.42-.05c-.14-.11-.22-.27-.16-.51s.66-.5.74-.43zm22.308-11.228l2.62 5.17l-1.79-.61v7.49l-1.79-.62l.01-7.43l-1.78-.58zm-29.889-11.38l.31 16.87l17.39 5.98l-.15-17.09zm23.98 9.41l2.62 5.17l-1.79-.61v7.49l-1.79-.62l.02-7.43l-1.79-.58zm-20.09-6.02l1.42.47l.66 2.39l-.74-.05l2.11 5.1l-1.09-4.2l.62-.01l-.63-2.93l7.33 2.42v4.03c0 1.53-1.66 3.46-4 2.5l.01 4.05l3.36 2.16l-8.13-2.82l3.27.16l-.06-4.01c-2.32-.69-4-3.48-4-5.18z"
      ></path>
      <path
        fill="url(#logosParcelIcona)"
        d="M141.434 99.977c-.4.01-.7.54-.71 1.02l-.09.04l-101.096-28.04c-.01-.19.21-.31.23-.43q.015-.015 0-.03c-.07-.31-.66-1.48-.85-1.6L0 48.81l.33-.75l104.656 26.849h.01l34.589 22.409c1.29.81 1.39 1.69 1.4 2.49c0 .01 0 .03.01.04c.04.19.28.12.44.13"
      ></path>
      <path
        fill="#CD9C6B"
        d="M216.902 64.228c-.76.76-1.11 1.69-.96 2.07l-73.628 34.839l-.15-.12c-.01-.58-.38-.97-.66-1.03c.15.02.29.07.33-.12c.02-.12.05-.26.1-.41c.04-.13.1-.27.17-.42c.21-.48.53-1 .94-1.46c.06-.06.12-.13.18-.19l39.929-37.339L255.56 29.27l.44.61z"
      ></path>
      <path
        fill="url(#logosParcelIconb)"
        d="M95.996 109.136c.11.03.15.04.15-.05l-.38-20.339c-.03-.69-.2-2.05-1.03-2.6L57.868 63.748l-17.28-4.46l37.469 22.39c.94.62 1.02 1.78 1.06 2.64l.54 19.778c0 .1.02.12.09.15z"
      ></path>
      <path
        fill="#D4A271"
        d="M141.434 99.977c-.41.01-.71.57-.71 1.06c-.01.04-.08.03-.09 0c-.08-1.09-.53-2.31-1.12-2.74l-34.868-22.48l.34-.91h.01l34.589 22.41c1.29.81 1.39 1.69 1.4 2.49c0 .01 0 .03.01.04c.04.19.28.12.44.13"
      ></path>
      <path fill="#DEB37E" d="m104.986 74.918l-.34.9L0 48.809l.33-.74z"></path>
      <path
        fill="#DBAD77"
        d="m215.952 66.298l-4 80.067c-.06.51-.3.66-.81 1.01l-70.077 44.358c-.1.07-.21.11-.31.14l.69-91.906c.18.01.35.1.39-.11c0-.03.01-.05.01-.08l74.087-33.57c0 .05.01.07.02.09"
      ></path>
      <path
        fill="url(#logosParcelIconc)"
        d="M211.952 146.335v.04c-.06.51-.3.66-.81 1.01l-70.077 44.358c-.1.07-.21.11-.31.14v-.26z"
        opacity=".54"
      ></path>
      <path
        fill="#322214"
        d="m210.642 111.496l-1.6 32.599l-23.3 14.51l1.2-33.93zm-12.46 23.6l-11.58 6.809l-.55 16.05l11.53-7.17zm-5.53 6.889l-.02.54c1.383-.69 2.69-.21 3.24 2.08c-.38-.53-1.07-.32-1.53.76c-.21-.45-1.28-.08-1.44.86c-.085-.153-.238-.209-.414-.189l-.255 6.189c-.02.53-.05 1.1-.72 1.51c-.31.14-1.13.25-1.02-.9l.39-.3c-.03.73.16.95.56.71c.48-.29.39-.75.41-1.18l.215-5.864a1.4 1.4 0 0 0-.605.894c-.12-.36-1.28-.14-1.42.89c-.33-.44-1.23-.01-1.57 1.1c.626-2.883 2.178-5.276 3.723-6.306l.017-.474zm16.9-13.61l-11.04 6.53l-.61 15.73l10.92-6.87zm-3.41 5.3l.32.3l-2.406 5.458l1.986 2.742l-.32.68l-1.98-2.71l-2.38 5.4l-.33-.3l2.424-5.491l-2.054-2.809l.36-.68l2.01 2.775zm-6.72 6.27l1.25 1.52l-1.33 2.86v-1.26l-.56.34l.03-1.63l.56-.33zm2.16-1.98l-.26 6.03l-.45.3l.25-6.01zm2.11 3.15l1.07 1.41l-2.3 1.4zm-12.25.44c.05 0 .02.69-.15 1.03c-.06.12-.17.25-.26.26s-.13-.09-.08-.35s.44-.94.49-.94m10.64-2.77l1.06 1.31l-1.24 2.45zm-7.6 1.52c.04.01.01.7-.15 1.03c-.06.12-.17.25-.26.26s-.13-.09-.08-.35s.44-.94.49-.94m4.44-21.84l-11.7 6.56l-.61 16.37l11.61-6.84zm7.71 16.43l-.28 6.02l-.4.26l.27-6.01zm-13.25 4.96c.05 0 .02.69-.15 1.03c-.06.12-.17.25-.26.26s-.13-.09-.08-.35s.44-.94.49-.94m12.22-3.21l-.16 3.84l-1.04-1.24zm2.48-1.83l-.06 1.48l.58-.32l-.07 1.64l-.56.33l-.02 1.35l-1.21-1.45zm-12.83 3.06c.05 0 .02.69-.15 1.03c-.06.12-.17.25-.26.26s-.13-.09-.08-.35s.44-.94.49-.94m9.78-2.32l-1.24 2.84l-1.07-1.45zm-8.83-13.61l-.15 4.12c-.06 1.4-1.18 3.94-2.85 5l-.18 3.89l2.23-.48l-5.43 3.14l2.26-2.15l.12-3.82c-1.45.83-2.61-.71-2.54-2.27l.13-3.78l.98-.53l.32 1.82l-.53.43l1.17 3.39l-.45-3.09l.4-.46l-.31-2.43zm14.2-9.859l-11.2 6.26l-.7 16.09l11.1-6.64zm-2.92 13.87l-.14 1.91l-6.56 3.88l.09-1.93zm-4.64-8.25l1.45 3.06l-1.09.61l-.33 6.87l-1.04.6l.2-6.87l-1.05.63zm3.64-2.02l1.41 3.01l-1.16.65l-.24 6.82l-1.11.62l.35-6.87l-1.09.62z"
      ></path>
      <path
        fill="#D7AA77"
        d="m183.733 60.838l-39.589 36.799c-1.12 1.07-1.86 2.67-1.83 3.5c-.02.04-.12.07-.16 0c.05-.64-.36-1.08-.66-1.15c.15.02.29.07.33-.12c.02-.12.05-.26.1-.41c.04-.13.1-.27.17-.42c.24-.54.63-1.16 1.11-1.64l39.929-37.339z"
      ></path>
      <path
        fill="url(#logosParcelIcond)"
        d="M175.003 105.476c0 .11.05.16.12.13l11.89-6.1c.02-.01.03-.03.04-.07l.66-19.489c.02-1.07.62-2.13 1.44-2.86L228.64 41.6l-12.02 5.15l-39.688 35.958c-1.02 1-1.37 2.18-1.39 3.18z"
      ></path>
      <path
        fill="#F8CE93"
        d="m183.733 60.838l72.257-30.959l-.44-.6l-72.407 30.769z"
      ></path>
    </svg>
  ),
  esbuild: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#ffcf00"></circle>
      <path
        fill="#191919"
        d="m18.2 23.8l-2.4-2.4l5.5-5.5l-5.5-5.5L18.2 8l7.8 7.8zm-8.4 0l-2.4-2.4l5.5-5.5l-5.5-5.5L9.8 8l7.8 7.8z"
      ></path>
    </svg>
  ),
  turbopack: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 293 256"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosTurbopackIcon0"
          x1="50%"
          x2="49.855%"
          y1="7.896%"
          y2="93.343%"
        >
          <stop offset="0%" stopColor="#0096FF"></stop>
          <stop offset="100%" stopColor="#FF1E56"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosTurbopackIcon0)"
        d="M128 0L46.16 46.768l.16 36.752L128 36.848l96 54.864L256 110V73.136zm-14.4 247.488L32 200.864V91.792l-.032-.016l-.176-36.8L0 73.136v146.288l81.68 46.672zM224 200.864v-92.56l32 18.288v92.832l-128 73.152l-31.888-18.224L128 255.76v-.048z"
      ></path>
      <path d="M46.4 108.369v84.128l81.6 46.64v-84.144zM128 53.441l-74.352 42.48l81.616 46.64l74.336-42.496z"></path>
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#cb3837"
        d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
      ></path>
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#f9ad00"
        d="M32.287 14.902v30.685h29.908V14.902Zm32.899 0v30.685h29.909V14.902Zm32.905 0v30.685H128V14.902Zm0 33.754v30.688H128V48.656z"
      ></path>
      <path
        fill="#4e4e4e"
        d="M65.186 48.656v30.688h29.909V48.656zm-60.023 9.37q-1.32 0-2.386.278q-1.065.279-1.782.74a3 3 0 0 0-.74.72Q0 60.156 0 60.781v11.114q0 .578.138.925q.139.37.417.58q.278.207.672.277q.416.07.925.07q.533 0 1.042-.093a5 5 0 0 0 .742-.14v-3.841a5.5 5.5 0 0 0 1.852.3q1.32 0 2.384-.37a4.9 4.9 0 0 0 1.852-1.112q.765-.764 1.182-1.874q.416-1.112.415-2.594q.001-1.551-.485-2.662a5.1 5.1 0 0 0-1.344-1.877q-.856-.74-2.06-1.087a8.5 8.5 0 0 0-2.569-.37Zm14.006 0q-1.459 0-2.664.348q-1.18.347-1.967.903a3 3 0 0 0-.74.717q-.255.394-.255 1.02v6.945q0 .578.138.95q.162.345.44.554t.672.278q.417.07.927.07a7 7 0 0 0 1.017-.07q.51-.069.742-.138v-8.035q.325-.231.763-.347a3.8 3.8 0 0 1 .927-.115q.694 0 1.087.347q.417.325.418 1.042v5.464q0 .579.14.95q.16.345.44.554q.276.21.67.278q.416.07.926.07a7 7 0 0 0 1.018-.07q.51-.069.742-.138v-7.247q0-2.038-1.412-3.172q-1.413-1.157-4.029-1.157zm13.036 0q-1.321 0-2.387.278q-1.064.279-1.782.74a3 3 0 0 0-.74.72q-.255.392-.255 1.017v11.114q0 .578.138.925q.14.37.417.58q.278.207.672.277q.417.07.925.07q.533 0 1.042-.093a5 5 0 0 0 .742-.14v-3.841a5.5 5.5 0 0 0 1.852.3q1.32 0 2.385-.37a4.9 4.9 0 0 0 1.852-1.112a5.2 5.2 0 0 0 1.18-1.874q.416-1.112.417-2.594q0-1.551-.485-2.662q-.488-1.136-1.345-1.877q-.855-.74-2.06-1.087a8.5 8.5 0 0 0-2.568-.37zm13.773 0q-1.273 0-2.454.348q-1.158.347-1.945.903a3.2 3.2 0 0 0-.74.694q-.255.37-.254.995v6.993q0 .578.137.95q.162.345.44.554t.672.278q.418.07.927.07q.532 0 1.018-.07q.51-.069.742-.138v-8.127q.208-.117.507-.232q.302-.139.72-.138q.602 0 1.017.325q.44.3.44.995v5.533q0 .578.14.95q.161.345.44.554q.278.21.672.278q.416.07.925.07t.995-.07a7 7 0 0 0 .764-.138v-7.85a.8.8 0 0 0-.022-.185q.184-.161.555-.3q.37-.162.694-.162q.672 0 1.065.325q.394.3.395.995v5.533q0 .578.137.95q.162.345.44.554t.672.278q.418.07.927.07q.532 0 1.018-.07q.51-.069.742-.138V62.31q0-1.18-.395-1.991q-.393-.834-1.065-1.32a4.2 4.2 0 0 0-1.504-.742a6.4 6.4 0 0 0-1.714-.23q-1.227 0-2.107.3a7 7 0 0 0-1.55.765a4.4 4.4 0 0 0-1.6-.788a6.3 6.3 0 0 0-1.851-.277zm-40.677 3.08q1.11 0 1.69.717q.601.718.602 2.2q0 2.847-2.385 2.848q-.37 0-.694-.092a3.5 3.5 0 0 1-.603-.232v-5.094q.255-.139.603-.232q.347-.115.787-.115m27.041 0q1.111 0 1.69.717q.602.718.602 2.2q0 2.847-2.384 2.848a2.5 2.5 0 0 1-.695-.092a3.5 3.5 0 0 1-.602-.232v-5.094q.255-.139.602-.232q.348-.115.787-.115m-.055 21.307v30.685h29.908V82.413Zm32.899 0v30.685h29.909V82.413Zm32.905 0v30.685H128V82.413Z"
      ></path>
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="#2c8ebb">
        <path d="M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84c-2.82-7.83-7.3-9.72-6.94-10.32c1.53-2.59 5.36-6.7 6.89-14.36c.91-4.64.67-12.28-1.39-16.28c-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 0 0-11.71 4.5a9.64 9.64 0 0 1-3.85 2.27c-.41.14-.91.12-2.15 3.47c-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 0 0-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 0 0 1.77 7.83a1.94 1.94 0 0 0 2.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19c1.6-1.6 1.92-5.17 2.51-6.63c.14-.34.62.57 1.08 1a10 10 0 0 0 1.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06c1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 0 0 2.61-1.46a63 63 0 0 0 15.49-7c4.74-3.09 6.68-3.93 10.51-4.84c3.16-.75 2.95-5.65-1.24-5.58z"></path>
        <path d="M64 2a62 62 0 1 0 62 62A62 62 0 0 0 64 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 0 1-15.56 7.18a8.71 8.71 0 0 1-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54c-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 0 1-3-3.9a6 6 0 0 1 0-2.06a6.66 6.66 0 0 1-.79-1A16.38 16.38 0 0 1 30 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0 1 36.61 64a26.82 26.82 0 0 1 6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42c1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 0 0 2.51-1.34A17.65 17.65 0 0 1 60.34 31c.19-.48.41-1 .65-1.46c1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 0 1 4.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 0 1 2.85-.1a3.81 3.81 0 0 1 2.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 0 1-5.84 13.31a25.73 25.73 0 0 1 5.77 9.43a25.42 25.42 0 0 1 1.41 10.41A28.7 28.7 0 0 0 86 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 0 1 7 5.7a6.35 6.35 0 0 1-4.89 7.03z"></path>
      </g>
    </svg>
  ),
  bun: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M113.744 41.999a19 19 0 0 0-.8-.772c-.272-.246-.528-.524-.8-.771s-.528-.525-.8-.771c-.272-.247-.528-.525-.8-.772s-.528-.524-.8-.771s-.528-.525-.8-.772s-.528-.524-.8-.771c7.936 7.52 12.483 17.752 12.656 28.481c0 25.565-26.912 46.363-60 46.363c-18.528 0-35.104-6.526-46.128-16.756l.8.772l.8.771l.8.772l.8.771l.8.772l.8.771l.8.771c11.008 10.662 27.952 17.527 46.928 17.527c33.088 0 60-20.797 60-46.285c0-10.893-4.864-21.215-13.456-29.33"></path>
      <path
        fill="#fbf0df"
        d="M116.8 65.08c0 23.467-25.072 42.49-56 42.49s-56-19.023-56-42.49c0-14.55 9.6-27.401 24.352-35.023S53.088 14.628 60.8 14.628S75.104 21 92.448 30.058C107.2 37.677 116.8 50.53 116.8 65.08"
      ></path>
      <path
        fill="#f6dece"
        d="M116.8 65.08a32.3 32.3 0 0 0-1.28-8.918c-4.368 51.377-69.36 53.846-94.912 38.48c11.486 8.584 25.66 13.144 40.192 12.928c30.88 0 56-19.054 56-42.49"
      ></path>
      <path
        fill="#fffefc"
        d="M39.248 27.234c7.152-4.135 16.656-11.896 26-11.911a15.4 15.4 0 0 0-4.448-.695c-3.872 0-8 1.93-13.2 4.83c-1.808 1.018-3.68 2.144-5.664 3.317c-3.728 2.222-8 4.736-12.8 7.251C13.904 37.972 4.8 51.071 4.8 65.08v1.836c9.696-33.033 27.312-35.547 34.448-39.682"
      ></path>
      <path
        fill="#ccbea7"
        d="M56.192 18.532A24.55 24.55 0 0 1 53.867 29.1a25.4 25.4 0 0 1-6.683 8.671c-.448.386-.096 1.127.48.91c5.392-2.02 12.672-8.068 9.6-20.272c-.128-.695-1.072-.51-1.072.123m3.632 0a24.5 24.5 0 0 1 3.646 10.12c.445 3.587.08 7.224-1.07 10.662c-.192.54.496 1.003.88.556c3.504-4.32 6.56-12.899-2.592-22.156c-.464-.4-1.184.216-.864.756zm4.416-.262a25.7 25.7 0 0 1 7.521 7.925A24.7 24.7 0 0 1 75.2 36.414c-.016.13.02.26.101.365a.543.543 0 0 0 .718.117a.5.5 0 0 0 .221-.313c1.472-5.384.64-14.564-11.472-19.332c-.64-.246-1.056.587-.528.957zM34.704 34.315a27.4 27.4 0 0 0 9.91-5.222a26.3 26.3 0 0 0 6.842-8.663c.288-.556 1.2-.34 1.056.277c-2.768 12.343-12.032 14.92-17.792 14.58c-.608.016-.592-.802-.016-.972"
      ></path>
      <path d="M60.8 111.443c-33.088 0-60-20.798-60-46.363c0-15.429 9.888-29.823 26.448-38.448c4.8-2.469 8.912-4.953 12.576-7.128c2.016-1.203 3.92-2.33 5.76-3.379C51.2 12.916 56 10.771 60.8 10.771s8.992 1.852 14.24 4.845c1.6.88 3.2 1.836 4.912 2.885c3.984 2.376 8.48 5.06 14.4 8.131c16.56 8.625 26.448 23.004 26.448 38.448c0 25.565-26.912 46.363-60 46.363m0-96.814c-3.872 0-8 1.928-13.2 4.829c-1.808 1.018-3.68 2.144-5.664 3.317c-3.728 2.222-8 4.736-12.8 7.251C13.904 37.972 4.8 51.071 4.8 65.08c0 23.436 25.12 42.506 56 42.506s56-19.07 56-42.506c0-14.01-9.104-27.108-24.352-35.023c-6.048-3.086-10.768-5.986-14.592-8.27c-1.744-1.033-3.344-1.99-4.8-2.838c-4.848-2.778-8.384-4.32-12.256-4.32"></path>
      <path
        fill="#b71422"
        d="M72.08 76.343c-.719 2.839-2.355 5.383-4.672 7.267a11.07 11.07 0 0 1-6.4 2.9a11.13 11.13 0 0 1-6.608-2.9c-2.293-1.892-3.906-4.436-4.608-7.267a1.1 1.1 0 0 1 .05-.5a1.1 1.1 0 0 1 .272-.428a1.19 1.19 0 0 1 .958-.322h19.744a1.19 1.19 0 0 1 .947.33a1.07 1.07 0 0 1 .317.92"
      ></path>
      <path
        fill="#ff6164"
        d="M54.4 83.733a11.24 11.24 0 0 0 6.592 2.932a11.24 11.24 0 0 0 6.576-2.932a17 17 0 0 0 1.6-1.65a10.9 10.9 0 0 0-3.538-2.564a11.3 11.3 0 0 0-4.302-1a10.1 10.1 0 0 0-4.549 1.192a9.7 9.7 0 0 0-3.451 3.097c.368.323.688.632 1.072.925"
      ></path>
      <path d="M54.656 82.514a8.5 8.5 0 0 1 2.97-2.347a8.8 8.8 0 0 1 3.734-.862a9.78 9.78 0 0 1 6.4 2.608c.368-.386.72-.787 1.056-1.188c-2.035-1.87-4.726-2.933-7.536-2.978a10.5 10.5 0 0 0-4.335.975a10.1 10.1 0 0 0-3.489 2.666q.568.595 1.2 1.126"></path>
      <path d="M60.944 87.436a12.08 12.08 0 0 1-7.12-3.086c-2.477-2.02-4.22-4.75-4.976-7.791c-.054-.27-.045-.55.027-.817a1.8 1.8 0 0 1 .389-.726a2.25 2.25 0 0 1 .81-.595a2.3 2.3 0 0 1 .998-.192h19.744c.343-.007.683.06.996.196a2.3 2.3 0 0 1 .812.591c.182.212.313.46.382.728c.07.267.076.545.018.815c-.756 3.042-2.5 5.771-4.976 7.791a12.08 12.08 0 0 1-7.104 3.086m-9.872-11.417c-.256 0-.32.108-.336.139c.676 2.638 2.206 4.999 4.368 6.742a10.12 10.12 0 0 0 5.84 2.7a10.2 10.2 0 0 0 5.84-2.67c2.155-1.745 3.679-4.106 4.352-6.741a.33.33 0 0 0-.14-.113a.35.35 0 0 0-.18-.026z"></path>
      <path
        fill="#febbd0"
        d="M85.152 77.3c5.17 0 9.36-2.377 9.36-5.308s-4.19-5.307-9.36-5.307s-9.36 2.376-9.36 5.307s4.19 5.307 9.36 5.307zm-48.432 0c5.17 0 9.36-2.377 9.36-5.308s-4.19-5.307-9.36-5.307s-9.36 2.376-9.36 5.307s4.19 5.307 9.36 5.307z"
      ></path>
      <path d="M41.12 69.863a9.05 9.05 0 0 0 4.902-1.425a8.6 8.6 0 0 0 3.254-3.812a8.2 8.2 0 0 0 .508-4.913a8.4 8.4 0 0 0-2.408-4.357a8.9 8.9 0 0 0-4.514-2.33a9.1 9.1 0 0 0-5.096.48a8.76 8.76 0 0 0-3.96 3.131a8.3 8.3 0 0 0-1.486 4.725c0 2.252.927 4.412 2.577 6.005c1.65 1.594 3.888 2.492 6.223 2.496m39.632 0a9.05 9.05 0 0 0 4.915-1.403a8.6 8.6 0 0 0 3.275-3.802a8.2 8.2 0 0 0 .528-4.917a8.4 8.4 0 0 0-2.398-4.368a8.9 8.9 0 0 0-4.512-2.344a9.1 9.1 0 0 0-5.103.473a8.76 8.76 0 0 0-3.967 3.13a8.3 8.3 0 0 0-1.49 4.73c-.004 2.245.914 4.4 2.555 5.994c1.64 1.593 3.869 2.495 6.197 2.507"></path>
      <path
        fill="#fff"
        d="M38.4 61.902a3.4 3.4 0 0 0 1.844-.531c.547-.35.974-.847 1.227-1.43a3.1 3.1 0 0 0 .195-1.847a3.16 3.16 0 0 0-.902-1.639a3.35 3.35 0 0 0-1.696-.878a3.43 3.43 0 0 0-1.916.179a3.3 3.3 0 0 0-1.489 1.176a3.1 3.1 0 0 0-.559 1.776c0 .844.347 1.654.964 2.253a3.37 3.37 0 0 0 2.332.94zm39.632 0a3.4 3.4 0 0 0 1.844-.531c.547-.35.974-.847 1.227-1.43a3.1 3.1 0 0 0 .195-1.847a3.16 3.16 0 0 0-.902-1.639a3.35 3.35 0 0 0-1.696-.878a3.43 3.43 0 0 0-1.916.179a3.3 3.3 0 0 0-1.489 1.176a3.1 3.1 0 0 0-.559 1.776c0 .84.342 1.644.953 2.242c.61.598 1.44.94 2.311.952z"
      ></path>
    </svg>
  ),
  vitest: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#FCC72B"
          d="m178.09 92.319l-47.813 69.131a4.118 4.118 0 0 1-6.778-.01a4.08 4.08 0 0 1-.706-2.502l1.914-38.168l-30.892-6.551a4.1 4.1 0 0 1-2.956-2.484a4.07 4.07 0 0 1 .435-3.83l47.814-69.131a4.12 4.12 0 0 1 4.699-1.56a4.1 4.1 0 0 1 2.079 1.571a4.07 4.07 0 0 1 .705 2.502l-1.914 38.168l30.892 6.55a4.1 4.1 0 0 1 1.792.874a4.07 4.07 0 0 1 .729 5.44"
        ></path>
        <path
          fill="#729B1B"
          d="M128.019 219.451a9.7 9.7 0 0 1-3.706-.734a9.7 9.7 0 0 1-3.14-2.101l-45.178-45.175a9.68 9.68 0 0 1 6.85-16.508a9.68 9.68 0 0 1 6.84 2.817l38.334 38.329l83.51-83.506a9.683 9.683 0 0 1 13.634.055a9.7 9.7 0 0 1 2.837 6.807a9.7 9.7 0 0 1-2.781 6.828l-90.356 90.353a9.63 9.63 0 0 1-6.844 2.835"
        ></path>
        <path
          fill="#729B1B"
          fillOpacity=".5"
          d="M127.98 219.451a9.7 9.7 0 0 0 3.706-.734a9.7 9.7 0 0 0 3.14-2.101l45.178-45.175a9.68 9.68 0 0 0-13.691-13.691l-38.333 38.329l-83.51-83.506a9.683 9.683 0 0 0-13.634.055a9.683 9.683 0 0 0-.056 13.635l90.356 90.353a9.65 9.65 0 0 0 6.844 2.835"
        ></path>
      </g>
    </svg>
  ),
  mocha: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#8d6748"
        d="m116.904 98.49l-49.469 28.582a6.826 6.826 0 0 1-6.87 0L11.096 98.491c-2.13-1.237-3.435-3.504-3.435-5.91V35.419c0-2.473 1.305-4.672 3.435-5.909L60.565.928a6.825 6.825 0 0 1 6.87 0l49.469 28.581c2.13 1.237 3.435 3.504 3.435 5.91v57.163c-.068 2.405-1.374 4.672-3.435 5.909z"
      ></path>
      <path
        fill="#fff"
        d="M63.931 8.69c-1.03 0-2.061.277-2.955.826L18.241 34.182c-1.855 1.03-2.953 3.022-2.953 5.084v49.33c0 2.13 1.098 4.055 2.953 5.086l42.735 24.665c.894.55 1.924.824 2.955.824c1.03 0 2.062-.274 2.955-.824l42.735-24.665c1.855-1.03 2.955-3.024 2.955-5.085V39.266c0-2.13-1.1-4.054-2.955-5.084L66.886 9.516a5.645 5.645 0 0 0-2.955-.825Zm0 2.062c.687 0 1.306.207 1.924.55l42.735 24.666a3.953 3.953 0 0 1 1.924 3.367v49.33c0 1.375-.756 2.68-1.924 3.367l-42.735 24.666c-.618.343-1.237.55-1.924.55a3.694 3.694 0 0 1-1.924-.55L19.272 92.032a3.953 3.953 0 0 1-1.924-3.366V39.335c0-1.375.756-2.68 1.924-3.367l42.735-24.666c.619-.343 1.306-.55 1.924-.55zm.24 19.375c-.893 1.1-2.404 2.268-.755 4.741c.55.618.824 1.924.756 2.336c0 0 2.473-1.442.961-4.053c-.893-1.374-1.305-2.543-.961-3.024zm-2.747 2.543c-.619.756-1.58 1.511-.481 3.229c.343.343.48 1.237.48 1.512c0 0 1.65-.962.62-2.748c-.619-.893-.894-1.718-.62-1.993zm-5.017 5.91a.687.687 0 0 0-.686.686c0 2.336.343 10.374 3.779 14.29a.624.624 0 0 0 .48.207h5.772a.625.625 0 0 0 .481-.206c3.436-3.848 3.779-11.887 3.779-14.291a.688.688 0 0 0-.688-.687zm1.993 2.128h9.07a.69.69 0 0 1 .687.688c0 1.924-.344 7.35-2.68 10.168c-.206.137-.343.207-.549.207h-4.054a.624.624 0 0 1-.481-.207c-2.336-2.748-2.61-8.244-2.68-10.168a.69.69 0 0 1 .687-.688zm8.657 4.672s-.068.62-1.717 1.238c-2.267.824-6.252.274-6.252.274c.343 1.443.892 2.817 1.717 3.848c.069.137.274.205.412.205h3.436c.137 0 .274-.068.412-.205c1.168-1.374 1.718-3.505 1.992-5.36zM20.2 48.747v.757h35.11c0-.275-.069-.482-.069-.757zm50.362 0c0 .275-.069.482-.069.757H107.8v-.757Zm-22.674 7.489c-1.03 0-1.993.137-2.886.55c-.893.343-1.649.893-2.267 1.511a6.9 6.9 0 0 0-1.512 2.267c-.343.894-.548 1.786-.548 2.748v.07c0 .961.205 1.924.548 2.749c.344.893.825 1.648 1.443 2.267c.618.618 1.375 1.168 2.268 1.511a7.986 7.986 0 0 0 2.886.549c1.03 0 1.991-.136 2.885-.549c.893-.343 1.65-.893 2.268-1.511a6.9 6.9 0 0 0 1.512-2.267c.343-.894.548-1.788.548-2.75v-.069a7.26 7.26 0 0 0-.548-2.748c-.344-.893-.825-1.648-1.443-2.267c-.618-.618-1.375-1.168-2.268-1.511a7.986 7.986 0 0 0-2.886-.55Zm18.963 0c-1.1 0-1.992.206-2.885.55c-.893.343-1.65.893-2.268 1.511a7.932 7.932 0 0 0-1.443 2.267a7.26 7.26 0 0 0-.549 2.748v.07c0 .961.205 1.855.549 2.749c.343.893.824 1.648 1.443 2.267c.618.618 1.375 1.168 2.2 1.511a7 7 0 0 0 2.747.549c.619 0 1.237 0 1.855-.137c.481-.068 1.03-.274 1.443-.48c.412-.207.824-.414 1.236-.757c.413-.344.756-.619 1.1-1.031l-1.58-1.58c-.619.55-1.237.962-1.787 1.306c-.55.343-1.304.48-2.129.48c-.618 0-1.238-.205-1.787-.411c-.55-.206-1.031-.619-1.443-1.031c-.412-.481-.756-.962-.962-1.58c-.206-.62-.343-1.238-.343-1.925v-.067c0-.619.137-1.238.343-1.857c.275-.55.55-1.098.962-1.51a5.503 5.503 0 0 1 1.443-1.03c.55-.276 1.1-.413 1.787-.413c.825 0 1.51.138 2.13.481a9.877 9.877 0 0 1 1.718 1.236l1.58-1.786c-.344-.343-.688-.618-1.032-.893c-.343-.275-.755-.481-1.167-.687c-.48-.138-.893-.275-1.443-.412c-.55-.07-1.1-.138-1.718-.138zm32.293.206l-6.047 13.81h2.474l1.442-3.297h6.458l1.376 3.298h2.54l-6.045-13.81zm-77.227.07v13.81h2.405v-9.827l4.26 6.39h.069l4.328-6.457v9.825h2.405V56.51h-2.542l-4.192 6.46l-4.191-6.458zm55.172 0v13.74h2.404v-5.771h6.596v5.772h2.405V56.51h-2.405v5.703h-6.596V56.51ZM47.82 58.434c.687 0 1.306.137 1.855.412a5.52 5.52 0 0 1 1.443 1.031c.412.481.756.961.962 1.58c.206.618.343 1.236.343 1.923v.07c0 .617-.137 1.236-.343 1.854c-.275.55-.55 1.1-.962 1.512a5.503 5.503 0 0 1-1.443 1.03c-.55.276-1.168.413-1.855.413c-.618 0-1.306-.137-1.856-.412a5.496 5.496 0 0 1-1.442-1.031c-.412-.481-.755-.962-.961-1.58c-.207-.62-.345-1.238-.345-1.925v-.067c0-.619.138-1.238.345-1.857c.274-.55.55-1.098.961-1.51a5.496 5.496 0 0 1 1.442-1.03c.55-.276 1.17-.413 1.856-.413zm52.422.893l2.336 5.496h-4.672ZM20.2 74.581v.755h87.6v-.755z"
      ></path>
    </svg>
  ),
  cypress: (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='1em' height='1em'><g fill="none"><g clip-path="url(#skillIconsCypressLight3)"><path fill="#F4F2ED" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"/><path fill="#1B1E2E" d="M101.859 109.68c6.978 0 12.648 3.731 15.555 10.211l.218.51l11.703-3.986l-.236-.601c-4.525-11.067-14.974-17.93-27.24-17.93c-8.632 0-15.647 2.767-21.444 8.464c-5.76 5.662-8.668 12.779-8.668 21.152c0 8.319 2.926 15.399 8.668 21.042c5.797 5.698 12.812 8.464 21.444 8.464c12.266 0 22.697-6.88 27.24-17.929l.236-.601l-11.721-3.986l-.2.528c-2.617 6.389-8.432 10.193-15.555 10.193c-4.852 0-8.96-1.693-12.194-5.042c-3.29-3.386-4.943-7.663-4.943-12.669c0-5.042 1.618-9.229 4.943-12.778c3.253-3.35 7.342-5.042 12.194-5.042"/><path fill="url(#skillIconsCypressLight0)" d="m152.669 210.085l-3.489-11.522c31.474-9.575 52.627-38.135 52.627-71.063c0-9.083-1.617-17.966-4.816-26.376l11.231-4.277c3.725 9.793 5.615 20.095 5.615 30.671c-.018 38.244-24.587 71.427-61.168 82.567"/><path fill="#69D3A7" d="M198.554 105.73c-9.613-31.418-38.162-52.515-71.054-52.515c-4.471 0-8.941.4-13.302 1.183l-2.126-11.85a87.3 87.3 0 0 1 15.428-1.383c38.198 0 71.363 24.519 82.539 61.015z"/><path fill="url(#skillIconsCypressLight1)" d="M46.706 157.935c-3.671-9.72-5.525-19.968-5.525-30.435c0-44.596 33.42-81.53 77.742-85.898l1.181 11.977c-38.144 3.768-66.91 35.55-66.91 73.921c0 9.011 1.598 17.839 4.742 26.194z"/><path fill="#1B1E2E" d="m175.148 98.977l-16.664 42.302l-16.791-42.302h-13.739l23.552 57.738l-17.155 41.684l12.012 2.403l41.76-101.825z"/><path fill="url(#skillIconsCypressLight2)" d="m136.513 193.157l-2.526 6.134c-.581 1.402-1.908 2.366-3.398 2.421c-1.036.036-2.053.073-3.107.073c-32.983 0-62.35-22.116-71.418-53.789l-11.557 3.313c10.54 36.787 44.65 62.49 82.957 62.508h.018c1.199 0 2.398-.018 3.598-.073c6.16-.255 11.666-4.132 14.029-9.866l3.416-8.318z"/></g><defs><linearGradient id="skillIconsCypressLight0" x1="220.45" x2="143.302" y1="128.046" y2="177.914" gradientUnits="userSpaceOnUse"><stop offset=".081" stop-color="#69D3A7"/><stop offset="1" stop-color="#69D3A7" stop-opacity="0"/></linearGradient><linearGradient id="skillIconsCypressLight1" x1="98.766" x2="50.215" y1="42.257" y2="145.059" gradientUnits="userSpaceOnUse"><stop stop-color="#69D3A7"/><stop offset=".823" stop-color="#2AB586"/><stop offset="1" stop-color="#1CAE7F"/></linearGradient><linearGradient id="skillIconsCypressLight2" x1="41.059" x2="168.061" y1="167.026" y2="206.818" gradientUnits="userSpaceOnUse"><stop offset=".077" stop-color="#1CAE7F"/><stop offset=".164" stop-color="#1CA379"/><stop offset=".316" stop-color="#1C8568"/><stop offset=".516" stop-color="#1B554D"/><stop offset=".719" stop-color="#1B1E2E"/></linearGradient><clipPath id="skillIconsCypressLight3"><path fill="#fff" d="M0 0h256v256H0z"/></clipPath></defs></g></svg>
  ),
  playwright: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#2D4552"
        d="M43.662 70.898c-4.124 1.17-6.829 3.222-8.611 5.272c1.707-1.494 3.993-2.865 7.077-3.739c3.155-.894 5.846-.888 8.069-.459v-1.739c-1.897-.173-4.072-.035-6.536.664ZM34.863 56.28l-15.314 4.035s.279.394.796.92l12.984-3.421s-.184 2.371-1.782 4.492c3.022-2.287 3.316-6.025 3.316-6.025Zm12.819 35.991C26.131 98.076 14.729 73.1 11.277 60.137C9.682 54.153 8.986 49.621 8.8 46.697a4.955 4.955 0 0 1 .011-.794c-1.118.068-1.653.649-1.544 2.328c.186 2.923.882 7.454 2.477 13.44c3.45 12.961 14.854 37.937 36.405 32.132c4.691-1.264 8.215-3.565 10.86-6.504c-2.438 2.202-5.49 3.937-9.327 4.972Zm4.05-51.276v1.534h8.453c-.173-.543-.348-1.032-.522-1.534h-7.932Z"
      ></path>
      <path
        fill="#2D4552"
        d="M62.074 53.627c3.802 1.08 5.812 3.745 6.875 6.104l4.239 1.204s-.578-8.255-8.045-10.376c-6.985-1.985-11.284 3.881-11.807 4.64c2.032-1.448 4.999-2.633 8.738-1.572Zm33.741 6.142c-6.992-1.994-11.289 3.884-11.804 4.633c2.034-1.446 4.999-2.632 8.737-1.566c3.796 1.081 5.804 3.743 6.87 6.104l4.245 1.208s-.588-8.257-8.048-10.379Zm-4.211 21.766l-35.261-9.858s.382 1.935 1.846 4.441l29.688 8.3c2.444-1.414 3.726-2.883 3.726-2.883Zm-24.446 21.218c-27.92-7.485-24.544-43.059-20.027-59.916c1.86-6.947 3.772-12.11 5.358-15.572c-.946-.195-1.73.304-2.504 1.878c-1.684 3.415-3.837 8.976-5.921 16.76c-4.516 16.857-7.892 52.429 20.027 59.914c13.159 3.525 23.411-1.833 31.053-10.247c-7.254 6.57-16.515 10.253-27.986 7.182Z"
      ></path>
      <path
        fill="#E2574C"
        d="M51.732 83.935v-7.179l-19.945 5.656s1.474-8.563 11.876-11.514c3.155-.894 5.846-.888 8.069-.459V40.995h9.987c-1.087-3.36-2.139-5.947-3.023-7.744c-1.461-2.975-2.96-1.003-6.361 1.842c-2.396 2.001-8.45 6.271-17.561 8.726c-9.111 2.457-16.476 1.805-19.55 1.273c-4.357-.752-6.636-1.708-6.422 1.605c.186 2.923.882 7.455 2.477 13.44c3.45 12.962 14.854 37.937 36.405 32.132c5.629-1.517 9.603-4.515 12.357-8.336h-8.309v.002Zm-32.185-23.62l15.316-4.035s-.446 5.892-6.188 7.405c-5.743 1.512-9.128-3.371-9.128-3.371Z"
      ></path>
      <path
        fill="#2EAD33"
        d="M109.372 41.336c-3.981.698-13.532 1.567-25.336-1.596c-11.807-3.162-19.64-8.692-22.744-11.292c-4.4-3.685-6.335-6.246-8.24-2.372c-1.684 3.417-3.837 8.977-5.921 16.762c-4.516 16.857-7.892 52.429 20.027 59.914c27.912 7.479 42.772-25.017 47.289-41.875c2.084-7.783 2.998-13.676 3.25-17.476c.287-4.305-2.67-3.055-8.324-2.064ZM53.28 55.282s4.4-6.843 11.862-4.722c7.467 2.121 8.045 10.376 8.045 10.376L53.28 55.282Zm18.215 30.706c-13.125-3.845-15.15-14.311-15.15-14.311l35.259 9.858c0-.002-7.117 8.25-20.109 4.453Zm12.466-21.51s4.394-6.838 11.854-4.711c7.46 2.124 8.048 10.379 8.048 10.379l-19.902-5.668Z"
      ></path>
      <path
        fill="#D65348"
        d="M44.762 78.733L31.787 82.41s1.41-8.029 10.968-11.212l-7.347-27.573l-.635.193c-9.111 2.457-16.476 1.805-19.55 1.273c-4.357-.751-6.636-1.708-6.422 1.606c.186 2.923.882 7.454 2.477 13.44c3.45 12.961 14.854 37.937 36.405 32.132l.635-.199l-3.555-13.337ZM19.548 60.315l15.316-4.035s-.446 5.892-6.188 7.405c-5.743 1.512-9.128-3.371-9.128-3.371Z"
      ></path>
      <path
        fill="#1D8D22"
        d="m72.086 86.132l-.594-.144c-13.125-3.844-15.15-14.311-15.15-14.311l18.182 5.082L84.15 39.77l-.116-.031c-11.807-3.162-19.64-8.692-22.744-11.292c-4.4-3.685-6.335-6.246-8.24-2.372c-1.682 3.417-3.836 8.977-5.92 16.762c-4.516 16.857-7.892 52.429 20.027 59.914l.572.129l4.357-16.748Zm-18.807-30.85s4.4-6.843 11.862-4.722c7.467 2.121 8.045 10.376 8.045 10.376l-19.907-5.654Z"
      ></path>
      <path
        fill="#C04B41"
        d="m45.423 78.544l-3.48.988c.822 4.634 2.271 9.082 4.545 13.011c.396-.087.788-.163 1.192-.273a25.224 25.224 0 0 0 2.98-1.023c-2.541-3.771-4.222-8.114-5.237-12.702Zm-1.359-32.64c-1.788 6.674-3.388 16.28-2.948 25.915a20.061 20.061 0 0 1 2.546-.923l.644-.144c-.785-10.292.912-20.78 2.825-27.915a139.404 139.404 0 0 1 1.455-5.05a45.171 45.171 0 0 1-2.578 1.53a132.234 132.234 0 0 0-1.944 6.587Z"
      ></path>
    </svg>
  ),
  puppeteer: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#dfdedf"
        d="M106.01 71.762H21.86v-4.745a5.773 5.773 0 0 1 5.773-5.773h72.602a5.773 5.773 0 0 1 5.774 5.773z"
      ></path>
      <path
        fill="#fff"
        d="M100.147 126.796H27.722a5.863 5.863 0 0 1-5.862-5.862V71.762h84.15v49.172a5.86 5.86 0 0 1-5.863 5.862"
      ></path>
      <path
        fill="#00d8a2"
        d="m91.832 44.428l10.297-4.971v-4.971l-23.79-11.36l23.79-12.25V6.081l-9.942-4.615L64.02 15.49L35.377 1.466l-9.23 4.971v4.26l22.368 12.25l-22.369 11.362v5.148l9.587 4.97L64.137 29.87z"
      ></path>
      <path d="M35.671.07a.66.66 0 0 0-.593.001L24.905 5.243a.66.66 0 0 0-.36.587v5.31c0 .251.142.48.366.592l7.202 3.559L30.7 30.739l-5.687 2.823a.66.66 0 0 0-.366.58l-.094 5.22a.66.66 0 0 0 .36.6l4.722 2.389l-.28 3.063l-6.436 16.688a6.42 6.42 0 0 0-1.792 4.45v54.99A6.464 6.464 0 0 0 27.583 128h72.834a6.464 6.464 0 0 0 6.456-6.458V66.553a6.42 6.42 0 0 0-1.608-4.25l-6.586-20.12l4.05-1.96a.66.66 0 0 0 .371-.595v-5.455a.66.66 0 0 0-.368-.592l-5.163-2.537l-1.294-16.066l6.463-3.246a.66.66 0 0 0 .362-.59V5.917a.66.66 0 0 0-.358-.585L92.483.075a.66.66 0 0 0-.6-.002l-27.568 13.99a.66.66 0 0 1-.591.002zm-.287 2.345L64.02 17.26L92.178 2.42l7.17 3.673l-26.073 13.12c-1.043.525-1.04 2.013.003 2.535l25.804 12.916l-6.689 3.467L64.02 23.59L35.147 38.425l-6.595-3.786L55.21 21.388c1.056-.524 1.049-2.033-.014-2.546v.002L28.458 5.934zm65.49 5.404v2.359l-22.64 11.367v-.002c-.033-.02-2.387-1.132-2.387-1.132zm-73.77.14L52.04 20.397l-2.521 1.008l-22.415-11.099zm66.103 8.56l1.04 12.895l-13.507-6.636zm-58.04.281L47 22.647l-12.956 6.432zm29.966 10.345l25.765 12.73v2.56l-25.765-13.2v-2.088zm-2.227.004v2.087L36.488 42.603v-2.356zm.816 4.273a.66.66 0 0 1 .595.002L91.626 45.31a.66.66 0 0 0 .585.006l3.193-1.547l1.315 16.327H31.205l1.278-13.947l.76-1.97l2.233 1.129a.66.66 0 0 0 .595 0zm-36.951 4.765l7.49 4.298v1.713l-7.49-3.79zm74.104.055v2.405L93.123 42.4v-2.14zM99.489 54.88l1.724 5.27a6 6 0 0 0-.796-.056h-.51zM28.294 57l-.282 3.094h-.429a7 7 0 0 0-.491.024zm-.71 5h72.833a4.55 4.55 0 0 1 4.547 4.55v4.258H23.036v-4.256a4.55 4.55 0 0 1 4.547-4.551zm.63 3.113a1.441 1.441 0 0 0 0 2.882a1.441 1.441 0 1 0 0-2.882m4.925 0a1.441 1.441 0 0 0 0 2.882a1.441 1.441 0 1 0 0-2.882m4.772 0a1.441 1.441 0 0 0 0 2.882a1.441 1.441 0 1 0 0-2.882m-14.875 7.603h81.928v48.825a4.55 4.55 0 0 1-4.547 4.55H27.583a4.55 4.55 0 0 1-4.547-4.55zM28.03 91.86v10.954h1.775v-4.157h2.292q.375 0 .71-.06q.337-.06.633-.177a2.8 2.8 0 0 0 1.028-.7a3 3 0 0 0 .646-1.076q.106-.307.16-.656q.054-.348.055-.737q0-.385-.055-.733a3.7 3.7 0 0 0-.162-.655a2.94 2.94 0 0 0-1.133-1.488a2.8 2.8 0 0 0-.55-.288a3.2 3.2 0 0 0-.627-.17a4 4 0 0 0-.705-.057zm45.23 1.34v2.182h-1.546v1.562h1.547v2.993q0 .363.047.677q.045.315.139.583q.093.27.235.492q.141.222.33.4q.19.18.415.316t.486.227t.556.137q.296.045.626.045q.222 0 .45-.033q.228-.032.462-.098q.235-.067.476-.168q.242-.1.491-.235l-.55-1.592a3.2 3.2 0 0 1-.626.26a2.2 2.2 0 0 1-.574.087a1.5 1.5 0 0 1-.248-.02a1 1 0 0 1-.216-.058a.84.84 0 0 1-.444-.41a1 1 0 0 1-.08-.213a2 2 0 0 1-.05-.252a2 2 0 0 1-.017-.29v-2.848h2.357v-1.562H75.17V93.2zm-43.455.514h2.292q.044 0 .086.002a2 2 0 0 1 .397.055l.073.021q.037.011.07.024a1.2 1.2 0 0 1 .253.133a1 1 0 0 1 .164.135l.051.05a2 2 0 0 1 .165.23l.033.062l.031.063a2 2 0 0 1 .053.135l.022.07l.021.073l.016.076a2 2 0 0 1 .035.321l.002.087l-.002.086q0 .042-.004.084l-.008.082a2 2 0 0 1-.023.159l-.016.076l-.021.072a1.7 1.7 0 0 1-.139.339a1.4 1.4 0 0 1-.12.176l-.045.055v.002a1.2 1.2 0 0 1-.468.317q-.033.013-.07.024l-.072.021a1.7 1.7 0 0 1-.314.051a2 2 0 0 1-.17.008h-2.292zm20.078 1.45q-.358 0-.685.051a4 4 0 0 0-.627.147a3.3 3.3 0 0 0-1.072.6v-.58H45.59v10.656h1.909v-4.005q.244.195.514.343q.271.146.57.242q.298.098.622.147q.325.05.678.05q.358 0 .693-.07a3.2 3.2 0 0 0 1.243-.542a4 4 0 0 0 1.016-1.05a3.5 3.5 0 0 0 .33-.649q.132-.342.196-.718q.066-.377.065-.789a3.7 3.7 0 0 0-.065-.789a3.6 3.6 0 0 0-.527-1.372a3.8 3.8 0 0 0-1.017-1.061a3.4 3.4 0 0 0-.603-.339a3.2 3.2 0 0 0-.644-.201a3.5 3.5 0 0 0-.687-.069zm9.282 0q-.357 0-.685.051a4 4 0 0 0-.626.147a3.3 3.3 0 0 0-1.073.6v-.58h-1.909v10.656h1.909v-4.005q.244.195.515.343q.27.146.57.242q.297.098.622.147q.325.05.677.05a3.4 3.4 0 0 0 1.335-.273q.31-.135.599-.339a4 4 0 0 0 .803-.753a3.6 3.6 0 0 0 .395-.613a3.8 3.8 0 0 0 .346-1.051q.066-.377.065-.789a3.6 3.6 0 0 0-.065-.789a3.8 3.8 0 0 0-.346-1.055a4 4 0 0 0-.18-.317a4 4 0 0 0-.464-.587a4 4 0 0 0-.556-.474a3.2 3.2 0 0 0-1.247-.54a3.4 3.4 0 0 0-.685-.069zm8.14 0q-.396 0-.758.069a3.45 3.45 0 0 0-1.323.536a3.8 3.8 0 0 0-1.04 1.046a3.5 3.5 0 0 0-.339.655a3.7 3.7 0 0 0-.203.728q-.068.381-.069.8a4.6 4.6 0 0 0 .153 1.172a3.7 3.7 0 0 0 .268.687a3.5 3.5 0 0 0 .65.886q.266.267.564.466a3.45 3.45 0 0 0 1.317.537q.36.068.752.068q.302 0 .587-.035t.55-.106a3.7 3.7 0 0 0 .989-.423a3.3 3.3 0 0 0 .798-.696q.174-.208.317-.449t.257-.518l-1.707-.36a2 2 0 0 1-.323.416q-.181.179-.405.298q-.224.12-.49.18q-.265.06-.573.059q-.17 0-.325-.03a1.6 1.6 0 0 1-.576-.233a2 2 0 0 1-.67-.73a2 2 0 0 1-.14-.323a3 3 0 0 1-.096-.36h5.493v-.652a5 5 0 0 0-.092-.775a4 4 0 0 0-.216-.7a3.5 3.5 0 0 0-.804-1.185a4 4 0 0 0-.56-.446a3.5 3.5 0 0 0-1.274-.515a4 4 0 0 0-.713-.067zm14.702 0q-.395 0-.758.069a3.45 3.45 0 0 0-1.323.536a3.8 3.8 0 0 0-.818.748a3.5 3.5 0 0 0-.56.953a3.7 3.7 0 0 0-.204.728q-.068.381-.068.8a4.6 4.6 0 0 0 .153 1.172a3.7 3.7 0 0 0 .268.687a3.5 3.5 0 0 0 .65.886q.266.267.563.466a3.5 3.5 0 0 0 1.318.537q.36.068.751.068q.304 0 .588-.035a4 4 0 0 0 .552-.106a3.7 3.7 0 0 0 .986-.423a3.3 3.3 0 0 0 .799-.696a3.6 3.6 0 0 0 .573-.967l-1.705-.36a2 2 0 0 1-.323.416q-.18.179-.405.298a2 2 0 0 1-.491.18q-.265.06-.574.059a1.7 1.7 0 0 1-.624-.118a1.7 1.7 0 0 1-.532-.344a2 2 0 0 1-.414-.53a2 2 0 0 1-.14-.324a3 3 0 0 1-.096-.36h5.492v-.652a5 5 0 0 0-.092-.775a4 4 0 0 0-.215-.7a3.5 3.5 0 0 0-.805-1.185a4 4 0 0 0-.56-.446a3.5 3.5 0 0 0-1.272-.515a4 4 0 0 0-.712-.067zm8.574 0q-.397 0-.76.069a3.6 3.6 0 0 0-1.323.536a3.8 3.8 0 0 0-.817.748a3.5 3.5 0 0 0-.56.953a3.7 3.7 0 0 0-.203.728q-.068.381-.068.8a4.6 4.6 0 0 0 .152 1.172a3.7 3.7 0 0 0 .268.687a3.5 3.5 0 0 0 .65.886q.266.267.564.466a3.5 3.5 0 0 0 1.317.537q.36.068.75.068q.305 0 .59-.035a4 4 0 0 0 .55-.106a3.7 3.7 0 0 0 .986-.423a3.3 3.3 0 0 0 1.116-1.145q.143-.241.258-.518l-1.707-.36a2 2 0 0 1-.323.416q-.181.179-.405.298q-.224.12-.49.18a2.6 2.6 0 0 1-.575.059a1.7 1.7 0 0 1-.622-.118a1.7 1.7 0 0 1-.533-.344a2 2 0 0 1-.413-.53a2 2 0 0 1-.14-.324a3 3 0 0 1-.099-.36h5.495v-.652a5 5 0 0 0-.094-.775a4 4 0 0 0-.213-.7a3.5 3.5 0 0 0-.807-1.185a4 4 0 0 0-.558-.446a3.5 3.5 0 0 0-1.274-.515a4 4 0 0 0-.713-.067zm9.599.118a3 3 0 0 0-1.116.2a2.8 2.8 0 0 0-.943.598a4 4 0 0 0-.274.286a4 4 0 0 0-.255.331v-1.313h-1.908v7.213h1.908v-2.328q.001-.387.041-.726q.04-.34.12-.63t.2-.53a2.2 2.2 0 0 1 .281-.435a1.96 1.96 0 0 1 .805-.58q.24-.096.522-.144a3.6 3.6 0 0 1 .605-.047h.42l.1-1.838a1 1 0 0 0-.214-.045a3 3 0 0 0-.292-.012m-63.684.1v4.396q0 .337.049.64q.048.304.148.576a2.8 2.8 0 0 0 1.03 1.339q.231.16.493.266t.554.16q.294.055.619.055q.352 0 .67-.055q.316-.054.6-.162a2.8 2.8 0 0 0 .998-.65v.65h1.909v-7.215h-1.909v3.196q0 .311-.027.584a4 4 0 0 1-.082.507a2.6 2.6 0 0 1-.141.426q-.084.194-.196.349a1.4 1.4 0 0 1-.56.466a1.6 1.6 0 0 1-.364.115a2 2 0 0 1-.423.04a1.6 1.6 0 0 1-.317-.03a1.3 1.3 0 0 1-.526-.233a1.4 1.4 0 0 1-.212-.2a1.4 1.4 0 0 1-.178-.248a1.6 1.6 0 0 1-.127-.29a2 2 0 0 1-.074-.329a3 3 0 0 1-.024-.362v-3.991zm13.054 1.446a2.5 2.5 0 0 1 .425.037a2 2 0 0 1 .56.196q.086.046.168.102q.04.028.08.059t.078.06l.077.069l.074.07a1.9 1.9 0 0 1 .343.498a2 2 0 0 1 .14.395a2.5 2.5 0 0 1 .073.444a3.2 3.2 0 0 1-.027.703a2.4 2.4 0 0 1-.184.603a2 2 0 0 1-.211.343a1.9 1.9 0 0 1-.443.409a1.95 1.95 0 0 1-.936.327a2 2 0 0 1-.415 0a2 2 0 0 1-.378-.077a2 2 0 0 1-.528-.256a2.4 2.4 0 0 1-.474-.419a1.85 1.85 0 0 1-.387-.728a2.2 2.2 0 0 1-.077-.433a3 3 0 0 1 .028-.689a2.2 2.2 0 0 1 .201-.6a2 2 0 0 1 .235-.35a2 2 0 0 1 .307-.299a2.4 2.4 0 0 1 .337-.227a2 2 0 0 1 .358-.152a1.9 1.9 0 0 1 .576-.085m9.282 0a2.5 2.5 0 0 1 .423.037a2 2 0 0 1 .56.196q.086.046.168.102q.04.028.08.059l.079.06q.039.034.076.069l.075.07a1.8 1.8 0 0 1 .342.498a2 2 0 0 1 .143.395a2.8 2.8 0 0 1 .078.683a2.7 2.7 0 0 1-.078.677a2.2 2.2 0 0 1-.239.566a2 2 0 0 1-.246.32a2.1 2.1 0 0 1-.478.357a1.8 1.8 0 0 1-.558.196a2.3 2.3 0 0 1-.622.03a2 2 0 0 1-.378-.077a2 2 0 0 1-.53-.256a2.2 2.2 0 0 1-.326-.266a2 2 0 0 1-.381-.494a2 2 0 0 1-.153-.387a2.2 2.2 0 0 1-.076-.433a3 3 0 0 1 .027-.689a2.2 2.2 0 0 1 .202-.6a2 2 0 0 1 .235-.35a2 2 0 0 1 .307-.299a2 2 0 0 1 .335-.227a2 2 0 0 1 .358-.152a2 2 0 0 1 .577-.085m8.472 0a2 2 0 0 1 .245.016l.072.01a2 2 0 0 1 .245.054a2 2 0 0 1 .227.092l.07.034a2 2 0 0 1 .212.127a1.5 1.5 0 0 1 .303.292a1.6 1.6 0 0 1 .16.25a1 1 0 0 1 .067.141l.03.075a2 2 0 0 1 .053.156l.023.082h-3.484a1.6 1.6 0 0 1 .088-.266l.021-.049a1.6 1.6 0 0 1 .136-.243a1.6 1.6 0 0 1 .178-.21l.043-.042a1.6 1.6 0 0 1 .213-.172a2 2 0 0 1 .223-.133l.06-.03a2 2 0 0 1 .24-.096a2 2 0 0 1 .246-.058l.077-.01a2 2 0 0 1 .252-.02m14.703 0a2 2 0 0 1 .244.016l.073.01a2 2 0 0 1 .245.054a2 2 0 0 1 .227.092l.07.034a2 2 0 0 1 .212.127a1.4 1.4 0 0 1 .21.184q.025.026.048.053l.047.055l.043.058a1.5 1.5 0 0 1 .115.192a2 2 0 0 1 .15.374l.023.082h-3.485v-.002a1.6 1.6 0 0 1 .088-.266l.022-.049a1.6 1.6 0 0 1 .135-.243a1.6 1.6 0 0 1 .178-.211l.043-.041a1.6 1.6 0 0 1 .214-.172a2 2 0 0 1 .223-.133l.06-.03a2 2 0 0 1 .24-.096a2 2 0 0 1 .246-.058l.076-.01a2 2 0 0 1 .253-.02m8.574 0a2 2 0 0 1 .244.016l.073.01a2 2 0 0 1 .244.054a2 2 0 0 1 .227.092l.07.034a2 2 0 0 1 .212.127a1.5 1.5 0 0 1 .464.542q.036.068.067.141l.03.075a2 2 0 0 1 .052.156l.023.082h-3.486a1.6 1.6 0 0 1 .088-.266l.022-.049a1.6 1.6 0 0 1 .135-.243a1.6 1.6 0 0 1 .176-.207l.053-.05a1.6 1.6 0 0 1 .207-.167a2 2 0 0 1 .225-.135l.053-.026a2 2 0 0 1 .243-.098a2 2 0 0 1 .249-.058l.074-.01a2 2 0 0 1 .255-.02"></path>
    </svg>
  ),
  selenium: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <g clipPath="url(#skillIconsSelenium0)">
          <rect width="256" height="256" fill="#59B943" rx="60"></rect>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M233.776-6H256v267h-2.066a1.96 1.96 0 0 0 1.968-1.963V33.736a1.827 1.827 0 0 0-1.142-2.317a1.833 1.833 0 0 0-2.322 1.139l-82.676 92.586a2.523 2.523 0 0 1-3.701 0l-42.204-43.427a2.51 2.51 0 0 1 0-3.14l13.936-17.827a2.524 2.524 0 0 1 4.095 0l23.622 26.072a2.524 2.524 0 0 0 3.858 0l65.826-89.995c.183-.266.291-.576.314-.898a1.81 1.81 0 0 0-.823-1.64a1.8 1.8 0 0 0-.909-.289M1.968-6H0v1.963c0-.52.207-1.02.577-1.388C.946-5.793 1.447-6 1.968-6M0 259.037V261h1.968a1.97 1.97 0 0 1-1.391-.575A1.96 1.96 0 0 1 0 259.037m168.968-95.997a19.55 19.55 0 0 0-13.349 4.721a19.32 19.32 0 0 0-6.599 12.461a.63.63 0 0 0 .117.545a.63.63 0 0 0 .509.233h38.723a.64.64 0 0 0 .473-.209a.61.61 0 0 0 .153-.491a18.7 18.7 0 0 0-6.446-12.719a18.93 18.93 0 0 0-13.581-4.541M26.141 216.003a63.73 63.73 0 0 0 45.197 15.706h-.08c29.843 0 44.252-15.235 44.252-35.182c0-25.017-23.279-30.59-41.64-34.986c-11.954-2.863-21.823-5.225-21.823-12.131c0-6.597 5.669-11.073 15.747-11.073a47.96 47.96 0 0 1 30.236 10.366a2.44 2.44 0 0 0 1.857.57a2.45 2.45 0 0 0 1.686-.963l9.685-13.428a2.43 2.43 0 0 0 0-3.377a62.15 62.15 0 0 0-41.338-13.821c-26.141 0-41.889 15.235-41.889 33.532c0 24.602 22.399 29.907 40.616 34.221c12.485 2.957 23.005 5.448 23.005 13.368c0 6.282-6.299 12.25-19.212 12.25a48.5 48.5 0 0 1-33.07-12.879a2.44 2.44 0 0 0-2.747.14a2.5 2.5 0 0 0-.64.724l-9.842 13.743a2.43 2.43 0 0 0 0 3.22m183.79-21.684c.107-.272.156-.563.145-.854l-.079-2.513c0-26.779-16.614-45.076-41.102-45.076a41.9 41.9 0 0 0-16.497 3.074a41.8 41.8 0 0 0-13.955 9.296a41.7 41.7 0 0 0-9.167 14.021a41.6 41.6 0 0 0-2.9 16.486a41.4 41.4 0 0 0 2.888 16.901a41.5 41.5 0 0 0 9.497 14.291a41.6 41.6 0 0 0 14.482 9.237a41.7 41.7 0 0 0 16.991 2.605a52.6 52.6 0 0 0 32.283-10.052a2.19 2.19 0 0 0 .472-2.905l-7.086-10.288a2.13 2.13 0 0 0-2.36-.887c-.29.081-.559.223-.79.416a36.44 36.44 0 0 1-20.157 6.597a22.17 22.17 0 0 1-15.357-4.536a22.06 22.06 0 0 1-8.265-13.683a.7.7 0 0 1 .151-.524a.7.7 0 0 1 .479-.261h58.267c.293.011.584-.039.857-.145a2.12 2.12 0 0 0 1.203-1.2"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsSelenium0">
            <rect width="256" height="256" fill="#fff" rx="60"></rect>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  storybook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#FF4785"
        d="m107.346 2.012l-6.914.431l.539 14.377c.028.795-.889 1.259-1.514.766l-4.63-3.65l-5.485 4.162a.934.934 0 0 1-1.498-.784l.617-14.123L19.873 7.48a6.264 6.264 0 0 0-5.87 6.488l3.86 102.838a6.264 6.264 0 0 0 5.98 6.023l83.612 3.754a6.273 6.273 0 0 0 4.609-1.73a6.255 6.255 0 0 0 1.936-4.526V8.264a6.258 6.258 0 0 0-1.975-4.566a6.257 6.257 0 0 0-4.679-1.686zm-41.46 21.187c16.308 0 25.214 8.723 25.214 25.319c-2.204 1.713-18.62 2.88-18.62.443c.346-9.3-3.817-9.707-6.13-9.707c-2.198 0-5.899.662-5.899 5.644c0 12.288 31.69 11.625 31.69 36.424c0 13.95-11.335 21.655-25.791 21.655c-14.92 0-27.957-6.036-26.485-26.963c.578-2.457 19.545-1.873 19.545 0c-.23 8.635 1.735 11.175 6.707 11.175c3.817 0 5.553-2.103 5.553-5.646c0-12.621-31.227-13.063-31.227-36.201c0-13.285 9.138-22.143 25.444-22.143z"
      ></path>
    </svg>
  ),
  pytest: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#696969"
        d="M31.512 30.398h61.304a3.006 3.006 0 0 1 0 6.012H31.512a3.007 3.007 0 0 1-3.004-3.004a3.01 3.01 0 0 1 3.004-3.008m0 0"
      ></path>
      <path fill="#009fe3" d="M32.047 24.32H44.37v2.844H32.047zm0 0"></path>
      <path fill="#c7d302" d="M48.168 24.32h12.324v2.844H48.168zm0 0"></path>
      <path fill="#f07e16" d="M64.07 24.32h12.328v2.844H64.07zm0 0"></path>
      <path
        fill="#df2815"
        d="M79.91 24.32h12.324v2.844H79.91zm0 15.22h12.324v20.835H79.91zm0 0"
      ></path>
      <path fill="#f07e16" d="M64.07 39.54h12.352v33.847H64.07zm0 0"></path>
      <path fill="#c7d302" d="M48.168 39.54h12.324v50.698H48.168zm0 0"></path>
      <path fill="#009fe3" d="M32.047 39.54H44.37v61.792H32.047zm0 0"></path>
    </svg>
  ),
  sqlite: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="vscodeIconsFileTypeSqlite0"
          x1="-118.318"
          x2="-116.751"
          y1="45.638"
          y2="45.638"
          gradientTransform="matrix(0 11.486 11.486 0 -510.889 1363.307)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#97d9f6"></stop>
          <stop offset=".92" stopColor="#0f80cc"></stop>
          <stop offset="1" stopColor="#0f80cc"></stop>
        </linearGradient>
      </defs>
      <path
        fill="#0f80cc"
        d="M23.192 3.242H5.623a2.147 2.147 0 0 0-2.141 2.141v19.376A2.147 2.147 0 0 0 5.623 26.9h11.572c-.132-5.758 1.835-16.932 5.997-23.658"
      ></path>
      <path
        fill="url(#vscodeIconsFileTypeSqlite0)"
        d="M22.554 3.867H5.623a1.52 1.52 0 0 0-1.516 1.516v17.962a42 42 0 0 1 13.569-2.684a123.6 123.6 0 0 1 4.878-16.794"
      ></path>
      <path
        fill="#003b57"
        d="M27.29 2.608c-1.2-1.073-2.66-.642-4.1.634q-.32.286-.638.625A25.4 25.4 0 0 0 17.1 15a10 10 0 0 1 .634 1.822c.036.14.069.272.1.384c.062.265.1.437.1.437s-.022-.083-.113-.346l-.059-.17l-.038-.094c-.16-.373-.6-1.16-.8-1.5c-.167.493-.315.954-.438 1.371a12 12 0 0 1 .908 2.8s-.03-.115-.171-.515a19 19 0 0 0-.9-1.708a4 4 0 0 0-.264 1.724a6 6 0 0 1 .493 1.383c.334 1.283.566 2.846.566 2.846l.02.263a26 26 0 0 0 .065 3.205a11.4 11.4 0 0 0 .584 3.1l.18-.1a13.9 13.9 0 0 1-.478-4.628a35.3 35.3 0 0 1 1.938-9.688c2.01-5.308 4.8-9.568 7.35-11.6c-2.326 2.1-5.474 8.9-6.417 11.418a45.7 45.7 0 0 0-2.254 8A6.2 6.2 0 0 1 21.39 20s1.233-1.521 2.674-3.693a26 26 0 0 0-2.755.733c-.7.294-.889.394-.889.394a24 24 0 0 1 4.215-2.007c2.676-4.215 5.592-10.2 2.656-12.824"
      ></path>
    </svg>
  ),
  reddis: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <g clipPath="url(#skillIconsRedisLight0)">
          <path
            fill="#A41E11"
            d="M220.161 174.468c-10.673 5.567-65.957 28.297-77.727 34.431c-11.771 6.135-18.308 6.077-27.608 1.633c-9.3-4.443-68.131-28.206-78.736-33.275c-5.302-2.535-8.08-4.666-8.08-6.681V150.36s76.599-16.675 88.968-21.113s16.649-4.597 27.179-.742c10.53 3.854 73.449 15.206 83.846 19.018v19.936c0 1.999-2.396 4.241-7.831 7.02z"
          ></path>
          <path
            fill="#D82C20"
            d="M220.162 154.246c-10.674 5.567-65.958 28.297-77.728 34.431c-11.771 6.135-18.308 6.076-27.608 1.633s-68.131-28.207-78.735-33.275c-10.605-5.069-10.817-8.552-.409-12.63l81.291-31.473c12.365-4.432 16.649-4.597 27.178-.742s65.481 25.726 75.873 29.596s10.8 6.946.127 12.513z"
          ></path>
          <path
            fill="#A41E11"
            d="M220.161 141.5c-10.673 5.567-65.957 28.297-77.727 34.431c-11.771 6.135-18.308 6.076-27.608 1.633s-68.131-28.207-78.736-33.275c-5.302-2.535-8.08-4.666-8.08-6.681v-20.217s76.599-16.675 88.968-21.112c12.37-4.438 16.649-4.597 27.179-.743s73.449 15.207 83.846 19.019v19.936c0 1.998-2.396 4.241-7.831 7.019z"
          ></path>
          <path
            fill="#D82C20"
            d="M220.162 121.283c-10.674 5.567-65.958 28.297-77.728 34.432c-11.771 6.134-18.308 6.076-27.608 1.633c-9.3-4.444-68.131-28.207-78.735-33.276c-10.605-5.069-10.817-8.552-.409-12.63l81.291-31.467c12.365-4.438 16.649-4.597 27.178-.742c10.53 3.854 65.481 25.73 75.883 29.532s10.801 6.946.128 12.513z"
          ></path>
          <path
            fill="#A41E11"
            d="M220.161 107.312c-10.673 5.567-65.957 28.297-77.727 34.437s-18.308 6.076-27.608 1.633s-68.131-28.207-78.736-33.276c-5.302-2.534-8.08-4.665-8.08-6.68V83.198s76.599-16.674 88.968-21.112s16.649-4.597 27.179-.742c10.53 3.854 73.449 15.206 83.846 19.018v19.936c0 1.999-2.396 4.241-7.831 7.02z"
          ></path>
          <path
            fill="#D82C20"
            d="M220.162 87.09c-10.674 5.567-65.958 28.297-77.728 34.432c-11.771 6.134-18.308 6.076-27.608 1.633S46.695 94.948 36.091 89.879c-10.605-5.069-10.817-8.552-.409-12.63l81.291-31.467c12.365-4.438 16.649-4.597 27.178-.742c10.53 3.854 65.481 25.73 75.883 29.532s10.801 6.946.128 12.513z"
          ></path>
          <path
            fill="#fff"
            d="m132.996 78.755l-6.267-10.418l-20.01-1.803l14.931-5.387l-4.481-8.27l13.977 5.46l13.18-4.316l-3.563 8.547l13.436 5.037l-17.327 1.803zM99.614 99.497l46.34-7.115l-13.997 20.529zm-12.491-7.481c13.68 0 24.771-4.3 24.771-9.602s-11.091-9.602-24.771-9.602S62.35 77.11 62.35 82.414s11.09 9.602 24.772 9.602"
          ></path>
          <path
            fill="#7A0C00"
            d="m202.113 81.014l-27.411 10.827l-.021-21.67z"
          ></path>
          <path
            fill="#AD2115"
            d="m174.707 91.84l-2.969 1.167l-27.39-10.827l30.343-12.003z"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsRedisLight0">
            <path fill="#fff" d="M28 28h200v200H28z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  googlecloud: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#ea4535"
        d="M80.6 40.3h.4l-.2-.2l14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2c5.2-3.4 11.4-5.4 17.9-5.4c2.2 0 4.3.2 6.4.6c.1-.1.2-.1.3-.1c9-9.9 24.2-11.1 34.6-2.6h-.1z"
      ></path>
      <path
        fill="#557ebf"
        d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1c4.3-13.8-1-28.8-13-36.9z"
      ></path>
      <path
        fill="#36a852"
        d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"
      ></path>
      <path
        fill="#f9bc15"
        d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8c-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8c6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"
      ></path>
    </svg>
  ),
  digitalocean: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#0080ff"
        d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"
      ></path>
    </svg>
  ),
  linode: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.5 3L5.531 4.906l4.344 2.657l6.375-2.407l-4.375-2.093C11.77 3.007 11.605 3 11.5 3M5 5.844l1.313 6.343c0 .106.113.208.218.313l3.813 3l-1.031-7.031zm11.719.25l-6.313 2.375l1.063 6.969l5.25-2.72c.156-.054.25-.257.25-.468zm6.25 6.125a.56.56 0 0 0-.282.094l-2.968 1.874l3.468 2.157l3.188-2.313l-3.156-1.719a.46.46 0 0 0-.25-.093m-16.25 1.75l1.125 5.562c0 .106.05.227.156.282l3.469 3.25l-.844-6zm10.312 0l-5.25 3l.719 6.093l4.531-3.03c.157-.106.274-.29.219-.5zm9.969.906l-.094.094c-.054.054-.043.125-.093.125l-3.22 2.187l-.155 3.375v.188l2.875-2.25c.105-.106.167-.207.218-.313zm-8.406.063a.8.8 0 0 0-.313.093l-.093.063l.156 4.437c0 .106-.008.27-.063.375l3.782-2.781l-3.188-2.094a.55.55 0 0 0-.281-.094zm4.062 3.03l-4.218 2.938l.125 3.625v.282l3.656-2.907c.105-.105.218-.218.218-.375zm-14.343 3.25l.78 4.22c0 .105.052.144.157.25L12.406 29l-.094-.219l-.687-4.343zm9.124.063l-4.718 3.032l.625 4.375l.062.312l3.938-3.156a.47.47 0 0 0 .218-.407z"
      ></path>
    </svg>
  ),
  heroku: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#430098" rx="60"></rect>
        <path
          fill="#fff"
          d="M70 218v-51.429l28.929 25.715zm90 0v-76.789c-.125-6.001-3.015-13.211-16.071-13.211c-26.145 0-55.473 13.15-55.765 13.281L70 149.51V38h25.714v73c12.838-4.179 30.783-8.714 48.215-8.714c15.894 0 25.408 6.248 30.59 11.491c11.06 11.185 11.211 25.434 11.196 27.08V218zm6.429-138.214h-25.715C150.82 66.526 157.165 52.574 160 38h25.714c-1.735 14.606-7.656 28.607-19.285 41.786"
        ></path>
      </g>
    </svg>
  ),
  vercel: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path fill="#000" d="m128 34l95 164.853H33z"></path>
      </g>
    </svg>
  ),
  netlify: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#014847"
        d="M29.39 13.98L18.02 2.61l-.42-.42l-.47-.19h-2.26l-.47.2l-.42.41L2.61 13.98l-.42.42l-.19.47v2.26l.2.47l.41.42l11.37 11.37l.42.42l.47.19h2.26l.47-.2l.42-.41l11.37-11.37l.42-.42l.19-.47v-2.26l-.2-.47z"
      ></path>
      <path
        fill="#32E6E2"
        d="M14.99 27.38v-5.46l.14-.15h1.74l.14.15v5.46l-.14.14h-1.74zm0-17.3V4.62l.14-.14h1.74l.14.14v5.46l-.14.15h-1.74zM10.4 23.33h-.24l-1.2-1.2v-.23l1.6-1.6h1.26l.17.18v1.26l-1.6 1.6ZM8.96 10.16v-.24l1.2-1.2h.24l1.59 1.6v1.26l-.17.17h-1.26zm-4.8 4.82h6.14l.14.15v1.74l-.14.14H4.16L4 16.87v-1.74l.15-.15Z"
      ></path>
      <path
        fill="#fff"
        d="M19.26 19.62h-1.74l-.15-.15v-4.06c0-.73-.28-1.29-1.15-1.3c-.45-.02-.97 0-1.51.02l-.09.08v5.26l-.14.15h-1.74l-.14-.15v-6.94l.14-.15h3.9a2.75 2.75 0 0 1 2.76 2.75v4.34l-.15.15Z"
      ></path>
      <path
        fill="#32E6E2"
        d="M27.84 17.02H21.7l-.14-.15v-1.74l.14-.14h6.14l.15.14v1.74z"
      ></path>
    </svg>
  ),
  render: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082c-.018.138-.045.272-.067.405c-.696 3.703-3.936 6.507-7.827 6.507a7.9 7.9 0 0 1-3.825-.979a.202.202 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244c-.12-3.084-2.61-5.603-5.682-5.75"
      ></path>
    </svg>
  ),
  supabase: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <g clipPath="url(#skillIconsSupabaseLight2)">
          <path
            fill="url(#skillIconsSupabaseLight0)"
            d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"
          ></path>
          <path
            fill="url(#skillIconsSupabaseLight1)"
            fillOpacity=".2"
            d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"
          ></path>
          <path
            fill="#3ECF8E"
            d="M112.207 31.666c5.061-6.375 15.323-2.882 15.445 5.256l.782 119.029H49.4c-14.497 0-22.582-16.744-13.567-28.097z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="skillIconsSupabaseLight0"
            x1="127.529"
            x2="198.661"
            y1="125.299"
            y2="155.132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#249361"></stop>
            <stop offset="1" stopColor="#3ECF8E"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsSupabaseLight1"
            x1="95.993"
            x2="128.433"
            y1="82.12"
            y2="143.187"
            gradientUnits="userSpaceOnUse"
          >
            <stop></stop>
            <stop offset="1" stopOpacity="0"></stop>
          </linearGradient>
          <clipPath id="skillIconsSupabaseLight2">
            <path fill="#fff" d="M32 28h192.92v200H32z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  firebase: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#ffa000"
        d="M17.474 103.276L33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39l6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714z"
      ></path>
      <path
        fill="#f57c00"
        d="M71.903 64.005L54.955 31.913l-37.481 71.363Z"
      ></path>
      <path
        fill="#ffca28"
        d="M110.577 103.276L98.51 28.604a2.91 2.91 0 0 0-1.984-2.286a2.91 2.91 0 0 0-2.94.714l-76.112 76.243l42.115 23.618a8.73 8.73 0 0 0 8.51 0l42.478-23.618Z"
      ></path>
      <path
        fill="#fff"
        fillOpacity=".2"
        d="M98.51 28.604a2.91 2.91 0 0 0-1.984-2.286a2.91 2.91 0 0 0-2.94.713L78.479 42.178L66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.91 2.91 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058l.415.204l75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003l.116-.073zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.91 2.91 0 0 1 3.057 1.495l16.292 30.39l6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41L17.61 103.138Z"
      ></path>
      <path
        fill="#a52714"
        d="M68.099 126.18a8.73 8.73 0 0 1-8.51 0l-42.015-23.55l-.102.647l42.115 23.61a8.73 8.73 0 0 0 8.51 0l42.48-23.61l-.11-.67l-42.37 23.575z"
        opacity=".2"
      ></path>
    </svg>
  ),
  appwrite: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#fd366e"
        d="M56.305 7.568c-25.833 0-47.611 17.355-54.309 41.042A55.7 55.7 0 0 0 0 60.187v7.628a56.1 56.1 0 0 0 7.421 24.402c9.758 16.868 27.996 28.215 48.884 28.215H128V92.217H56.305a28.1 28.1 0 0 1-19.363-7.696c-5.453-5.143-8.855-12.432-8.855-20.52c0-2.668.37-5.248 1.063-7.696c.78-2.76 1.97-5.348 3.503-7.695c5.033-7.722 13.746-12.827 23.652-12.827s18.617 5.105 23.65 12.827h30.655C103.913 24.923 82.14 7.568 56.305 7.568M83.46 56.305a28.2 28.2 0 0 1 1.062 7.696c0 8.088-3.401 15.377-8.855 20.52H128V56.305Z"
      ></path>
    </svg>
  ),
  cloudflare: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#FFF"
        d="m115.679 69.288l-15.591-8.94l-2.689-1.163l-63.781.436v32.381h82.061z"
      ></path>
      <path
        fill="#F38020"
        d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796c-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872c-2.906-13.158-14.644-22.97-28.672-22.97c-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811c-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
      ></path>
      <path
        fill="#FAAE40"
        d="M101.542 60.275c-.4 0-.836 0-1.236.036c-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796c1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363c.145.218.182.545.109.8c-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654c.581-2.108.909-4.325.909-6.614c0-13.447-10.975-24.422-24.458-24.422"
      ></path>
    </svg>
  ),
  rabbitmq: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#F60"
          d="M196.813 112.43h-49.858a4.53 4.53 0 0 1-4.532-4.529V55.966A6.967 6.967 0 0 0 135.457 49h-17.798a6.966 6.966 0 0 0-6.967 6.966v51.621a4.867 4.867 0 0 1-4.846 4.866l-16.339.078a4.867 4.867 0 0 1-4.892-4.875l.101-51.679A6.963 6.963 0 0 0 77.75 49H59.967A6.966 6.966 0 0 0 53 55.966v145.426a6.184 6.184 0 0 0 6.185 6.184h137.628a6.184 6.184 0 0 0 6.187-6.184v-82.777a6.185 6.185 0 0 0-6.187-6.185m-23.381 54.602a8.11 8.11 0 0 1-8.111 8.108h-14.065a8.11 8.11 0 0 1-8.112-8.108v-14.058a8.11 8.11 0 0 1 8.112-8.108h14.065a8.11 8.11 0 0 1 8.111 8.108z"
        ></path>
      </g>
    </svg>
  ),
  kafka: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#A9CBD4" rx="60"></rect>
        <g clipPath="url(#skillIconsKafka0)">
          <path
            fill="#000"
            d="M162.998 138.677c-7.78 0-14.754 3.447-19.53 8.873l-12.238-8.664c1.299-3.576 2.045-7.417 2.045-11.437c0-3.95-.72-7.727-1.976-11.25l12.21-8.572c4.776 5.398 11.732 8.826 19.489 8.826c14.358 0 26.042-11.681 26.042-26.042c0-14.36-11.684-26.042-26.042-26.042S136.956 76.05 136.956 90.41c0 2.57.388 5.049 1.085 7.396l-12.219 8.577a33.6 33.6 0 0 0-20.827-12.103V79.554c11.796-2.477 20.685-12.958 20.685-25.482c0-14.36-11.684-26.042-26.043-26.042S73.596 39.71 73.596 54.072c0 12.356 8.658 22.708 20.219 25.362v14.918C78.037 97.122 66 110.89 66 127.449c0 16.64 12.156 30.459 28.047 33.134v15.752c-11.679 2.567-20.452 12.982-20.452 25.422c0 14.361 11.684 26.043 26.043 26.043s26.042-11.682 26.042-26.043c0-12.44-8.773-22.855-20.452-25.422v-15.752a33.63 33.63 0 0 0 20.475-11.908l12.32 8.72a26 26 0 0 0-1.067 7.325c0 14.36 11.683 26.042 26.042 26.042c14.358 0 26.042-11.682 26.042-26.042s-11.684-26.043-26.042-26.043m0-60.892c6.963 0 12.626 5.665 12.626 12.626s-5.663 12.626-12.626 12.626s-12.626-5.665-12.626-12.626s5.663-12.626 12.626-12.626M87.011 54.072c0-6.96 5.664-12.626 12.627-12.626c6.962 0 12.626 5.665 12.626 12.626S106.6 66.698 99.638 66.698c-6.963 0-12.627-5.665-12.627-12.626m25.253 147.685c0 6.961-5.664 12.626-12.626 12.626c-6.963 0-12.627-5.665-12.627-12.626s5.664-12.626 12.627-12.626c6.962 0 12.626 5.666 12.626 12.626m-12.627-56.699c-9.711 0-17.612-7.898-17.612-17.609s7.9-17.611 17.611-17.611s17.611 7.9 17.611 17.611s-7.9 17.609-17.61 17.609m63.361 32.288c-6.963 0-12.626-5.666-12.626-12.626c0-6.961 5.663-12.626 12.626-12.626s12.626 5.665 12.626 12.626s-5.663 12.626-12.626 12.626"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsKafka0">
            <path fill="#fff" d="M66 28h123.04v200H66z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  postman: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#FF6C37" rx="60"></rect>
        <path
          fill="#EEE"
          d="m169.061 88.612l-50.54 50.541l-14.253-14.252c49.703-49.702 54.614-45.39 64.793-36.289"
        ></path>
        <path
          fill="#FF6C37"
          d="M118.521 140.35c-.36 0-.599-.119-.839-.359l-14.372-14.252a1.157 1.157 0 0 1 0-1.676c50.541-50.542 55.81-45.751 66.47-36.17c.24.24.359.48.359.839c0 .36-.119.599-.359.837l-50.541 50.422c-.119.24-.479.359-.718.359m-12.576-15.449l12.576 12.575l48.744-48.744c-8.862-7.905-14.851-10.3-61.32 36.169"
        ></path>
        <path
          fill="#EEE"
          d="m133.012 153.645l-13.773-13.773l50.541-50.54c13.534 13.652-6.707 35.809-36.768 64.313"
        ></path>
        <path
          fill="#FF6C37"
          d="M133.012 154.843c-.36 0-.598-.12-.838-.36l-13.773-13.773c-.24-.239-.24-.479-.24-.838c0-.36.12-.599.36-.839l50.54-50.54a1.16 1.16 0 0 1 1.677 0a14.58 14.58 0 0 1 4.671 11.138c-.239 13.293-15.33 30.18-41.439 54.852c-.359.24-.719.36-.958.36m-12.096-14.971c7.664 7.784 10.899 10.899 12.096 12.096c20.121-19.162 39.642-38.804 39.762-52.337c.12-3.114-1.077-6.228-3.114-8.624z"
        ></path>
        <path
          fill="#EEE"
          d="m104.508 125.26l10.18 10.18q.359.36 0 .719c-.12.12-.12.12-.239.12l-21.08 4.551c-1.077.12-2.035-.599-2.275-1.677c-.12-.599.12-1.197.48-1.557l12.215-12.216c.24-.24.599-.36.719-.12"
        ></path>
        <path
          fill="#FF6C37"
          d="M93.01 142.028c-1.796 0-3.114-1.438-3.114-3.235c0-.837.36-1.676.959-2.275l12.215-12.216c.719-.599 1.678-.599 2.396 0l10.18 10.18c.718.599.718 1.677 0 2.395c-.24.24-.479.36-.839.48l-21.078 4.551c-.24 0-.48.12-.719.12m11.139-15.451l-11.737 11.737c-.24.24-.36.599-.12.958c.12.36.478.48.838.36l19.761-4.312z"
        ></path>
        <path
          fill="#EEE"
          d="M195.769 60.588c-7.665-7.425-20.001-7.186-27.427.599c-7.425 7.784-7.185 20 .599 27.426a19.35 19.35 0 0 0 23.475 2.635l-13.654-13.654z"
        ></path>
        <path
          fill="#FF6C37"
          d="M182.355 95.2c-11.377 0-20.599-9.222-20.599-20.6S170.978 54 182.355 54c5.27 0 10.42 2.036 14.252 5.749c.24.24.36.48.36.838c0 .36-.12.6-.36.839l-16.168 16.168l12.695 12.695c.48.48.48 1.198 0 1.677l-.239.24c-3.114 1.915-6.827 2.994-10.54 2.994m0-38.684c-10.06 0-18.204 8.143-18.084 18.204c0 10.06 8.143 18.204 18.204 18.085c2.755 0 5.509-.6 8.024-1.917l-12.575-12.455c-.24-.24-.359-.48-.359-.839c0-.36.119-.599.359-.838l16.049-16.049c-3.234-2.754-7.306-4.191-11.618-4.191"
        ></path>
        <path
          fill="#EEE"
          d="m196.128 60.947l-.239-.24l-17.127 16.887l13.534 13.534c1.318-.839 2.634-1.796 3.713-2.874a19.195 19.195 0 0 0 .119-27.307"
        ></path>
        <path
          fill="#FF6C37"
          d="M192.416 92.445c-.36 0-.599-.12-.839-.36l-13.653-13.653c-.24-.24-.359-.479-.359-.838c0-.36.119-.6.359-.839L194.93 59.75c.48-.48 1.198-.48 1.677 0l.36.24c8.024 8.023 8.024 20.958.12 29.103c-1.198 1.197-2.516 2.275-3.953 3.113c-.359.12-.598.24-.718.24m-11.977-14.851l12.097 12.096c.958-.598 1.916-1.437 2.634-2.156c6.827-6.827 7.186-17.964.599-25.15z"
        ></path>
        <path
          fill="#EEE"
          d="M171.098 90.767a7.374 7.374 0 0 0-10.42 0l-45.152 45.152l7.546 7.545l47.786-41.917c3.114-2.636 3.353-7.307.719-10.42c-.24-.12-.36-.24-.479-.36"
        ></path>
        <path
          fill="#FF6C37"
          d="M122.952 144.662c-.359 0-.599-.12-.839-.359l-7.545-7.545a1.16 1.16 0 0 1 0-1.677l45.151-45.152a8.53 8.53 0 0 1 12.097 0a8.53 8.53 0 0 1 0 12.097l-.359.359l-47.787 41.918q-.179.359-.718.359m-5.749-8.743l5.869 5.869l46.948-41.2c2.634-2.156 2.874-6.108.718-8.742s-6.108-2.874-8.743-.72c-.119.12-.239.24-.479.36z"
        ></path>
        <path
          fill="#EEE"
          d="M80.914 187.3c-.48.239-.719.718-.6 1.197l2.037 8.624c.48 1.197-.24 2.635-1.557 2.994c-.958.359-2.035 0-2.634-.718l-13.175-13.055l42.996-42.996l14.851.239l10.06 10.061c-2.395 2.036-16.887 16.048-51.978 33.654"
        ></path>
        <path
          fill="#FF6C37"
          d="M79.956 201.311c-.958 0-1.916-.359-2.515-1.077l-13.055-13.055c-.24-.239-.359-.479-.359-.838s.12-.599.36-.839l42.995-42.995c.24-.24.599-.36.839-.36l14.851.24c.359 0 .598.12.837.359l10.061 10.06c.24.24.359.599.359.958c0 .36-.119.599-.479.839l-.838.719c-12.695 11.137-29.942 22.276-51.38 32.935l2.037 8.503c.359 1.557-.36 3.234-1.797 4.072c-.719.359-1.317.479-1.916.479m-13.175-14.97l12.337 12.216c.358.599 1.077.838 1.676.479s.839-1.078.48-1.677l-2.036-8.623c-.24-1.078.238-2.036 1.197-2.515c21.198-10.659 38.325-21.677 50.9-32.576l-8.862-8.863l-13.773-.24z"
        ></path>
        <path
          fill="#EEE"
          d="m54.805 196.641l10.3-10.3l15.33 15.33l-24.432-1.676c-1.078-.12-1.797-1.078-1.677-2.157c0-.479.12-.958.48-1.197"
        ></path>
        <path
          fill="#FF6C37"
          d="m80.435 202.749l-24.552-1.677c-1.797-.12-2.995-1.676-2.875-3.473c.12-.719.36-1.437.959-1.916l10.3-10.3a1.157 1.157 0 0 1 1.676 0l15.33 15.33c.36.359.48.838.24 1.318q-.36.718-1.078.718m-15.33-14.731l-9.461 9.461c-.36.24-.36.839 0 1.078c.12.12.24.24.479.24l21.198 1.437zm38.684-39.163c-.719 0-1.198-.599-1.198-1.198c0-.359.12-.598.36-.838l11.617-11.617a1.157 1.157 0 0 1 1.677 0l7.545 7.545c.359.359.479.718.359 1.198c-.12.359-.479.718-.957.838l-19.163 4.072zm11.617-11.138l-7.904 7.905l12.934-2.756z"
        ></path>
        <path
          fill="#EEE"
          d="m122.832 143.584l-13.174 2.875c-.958.24-1.917-.359-2.156-1.317c-.12-.599 0-1.198.479-1.677l7.305-7.306z"
        ></path>
        <path
          fill="#FF6C37"
          d="M109.418 147.657a2.964 2.964 0 0 1-2.994-2.994c0-.838.359-1.557.838-2.155l7.306-7.306a1.157 1.157 0 0 1 1.677 0l7.545 7.545c.359.359.479.718.359 1.198c-.12.359-.479.718-.957.838l-13.175 2.874zm5.988-9.94l-6.467 6.467c-.239.24-.239.479-.12.719q.18.359.719.359l11.018-2.396zm80.842-65.274c-.239-.718-1.078-1.077-1.797-.837c-.718.238-1.077 1.077-.837 1.796c0 .12.119.24.119.359c.718 1.438.48 3.234-.479 4.551c-.479.6-.359 1.438.12 1.917c.599.478 1.437.36 1.916-.24c1.797-2.276 2.156-5.15.958-7.546"
        ></path>
      </g>
    </svg>
  ),
  clerk: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="m21.47 20.829l-2.881-2.881a.57.57 0 0 0-.7-.084a6.85 6.85 0 0 1-7.081 0a.576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69a.6.6 0 0 0 .166.186a12 12 0 0 0 14.113 0a.58.58 0 0 0 .239-.423a.58.58 0 0 0-.172-.453m.002-17.668l-2.88 2.88a.57.57 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.86 6.86 0 0 0-1.222 3.692a6.86 6.86 0 0 0 .978 3.764a.57.57 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405a.57.57 0 0 1 .232.418a.57.57 0 0 1-.168.448m-7.118 12.261a3.427 3.427 0 1 0 0-6.854a3.427 3.427 0 0 0 0 6.854"
      ></path>
    </svg>
  ),
  wordpress: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#0073AA" rx="60"></rect>
        <path
          fill="#fff"
          d="M42.214 127.994c0 33.955 19.733 63.299 48.347 77.205L49.641 93.083a85.5 85.5 0 0 0-7.427 34.911m143.694-4.329c0-10.601-3.808-17.943-7.074-23.658c-4.349-7.066-8.425-13.05-8.425-20.116c0-7.886 5.981-15.226 14.405-15.226c.381 0 .741.047 1.112.068c-15.262-13.982-35.595-22.519-57.929-22.519c-29.968 0-56.335 15.376-71.673 38.666c2.012.06 3.909.103 5.52.103c8.973 0 22.862-1.09 22.862-1.09c4.624-.272 5.17 6.52.55 7.067c0 0-4.647.547-9.818.818l31.238 92.918l18.773-56.303l-13.365-36.618c-4.619-.271-8.995-.818-8.995-.818c-4.623-.271-4.081-7.339.542-7.066c0 0 14.166 1.088 22.595 1.088c8.972 0 22.862-1.088 22.862-1.088c4.628-.273 5.171 6.519.55 7.066c0 0-4.657.547-9.818.818l31.001 92.214l8.556-28.592c3.709-11.866 6.531-20.388 6.531-27.732"
        ></path>
        <path
          fill="#fff"
          d="m129.503 135.498l-25.738 74.79a85.8 85.8 0 0 0 24.233 3.495a85.7 85.7 0 0 0 28.486-4.863a7.5 7.5 0 0 1-.61-1.182zm73.766-48.66a66 66 0 0 1 .578 8.82c0 8.705-1.626 18.491-6.523 30.727l-26.203 75.759c25.503-14.872 42.657-42.501 42.657-74.148c.001-14.915-3.808-28.94-10.509-41.158"
        ></path>
        <path
          fill="#fff"
          d="M127.998 28C72.86 28 28 72.857 28 127.994c0 55.144 44.86 99.999 99.998 99.999c55.135 0 100.002-44.855 100.002-99.999C227.998 72.857 183.133 28 127.998 28m0 195.41c-52.61 0-95.413-42.804-95.413-95.416c0-52.609 42.802-95.409 95.413-95.409c52.607 0 95.407 42.8 95.407 95.409c0 52.612-42.8 95.416-95.407 95.416"
        ></path>
      </g>
    </svg>
  ),
  sanity: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#F03E2F" d="M0 0h128v128H0z"></path>
      <path
        fill="#FFF"
        d="M39.423 33.163c0 10.998 6.913 17.543 20.754 20.993l14.666 3.341c13.099 2.956 21.075 10.298 21.075 22.258a22.47 22.47 0 0 1-4.884 14.408c0-11.933-6.283-18.38-21.439-22.258l-14.4-3.217c-11.532-2.585-20.432-8.62-20.432-21.612a22.35 22.35 0 0 1 4.66-13.913"
      ></path>
      <path
        fill="#F9B1AB"
        d="M82.022 76.827c6.256 3.932 8.998 9.431 8.998 17.323c-5.177 6.516-14.274 10.173-24.965 10.173c-17.997 0-30.592-8.702-33.391-23.825h17.283c2.225 6.943 8.117 10.16 15.981 10.16c9.6 0 15.982-5.032 16.108-13.859M48.407 49.468a18.2 18.2 0 0 1-6.781-6.935a17.8 17.8 0 0 1-2.203-9.37c4.996-6.462 13.686-10.407 24.28-10.407c18.333 0 28.94 9.513 31.558 22.904H78.635c-1.833-5.28-6.423-9.39-14.792-9.39c-8.942 0-15.044 5.114-15.394 13.198"
      ></path>
    </svg>
  ),
  shopify: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 292 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#95BF46"
        d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805c-.19.056-3.388 1.043-8.678 2.68c-5.18-14.906-14.322-28.604-30.405-28.604c-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635c-14.558 4.511-24.9 7.718-26.221 8.133c-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042l89.77-19.42S223.973 58.8 223.775 57.34M156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023c0-9.264-1.286-16.723-3.349-22.636c8.287 1.04 13.806 10.469 17.358 21.32m-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238c0 .572-.005 1.095-.01 1.624c-9.117 2.824-19.024 5.89-28.953 8.966c5.575-21.516 16.025-31.908 25.161-35.828m-11.131-10.537c1.617 0 3.246.549 4.805 1.622c-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828"
      ></path>
      <path
        fill="#5E8E3E"
        d="M221.237 54.983a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233l89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
      ></path>
      <path
        fill="#FFF"
        d="m135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693c0 15.038 39.2 20.8 39.2 56.024c0 27.713-17.577 45.558-41.277 45.558c-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232c0-19.616-32.16-20.491-32.16-52.724c0-27.129 19.472-53.382 58.778-53.382c15.145 0 22.627 4.338 22.627 4.338"
      ></path>
    </svg>
  ),
  woocommerce: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#7f54b3"
        d="M116.3 89.1H11.7C5.2 89.1 0 83.9 0 77.4v-40C0 31 5.2 25.8 11.7 25.8h104.7c6.4 0 11.7 5.2 11.7 11.7v40c-.1 6.4-5.3 11.6-11.8 11.6z"
      ></path>
      <path
        fill="#FFF"
        d="M13.8 76.7s2.8 11.8 8.5 3.9s11.2-20.3 11.2-20.3s.4-3.1 2 3.7S44 80 44 80s6.3 7.9 8.9-.4c-1-11 2.8-31 6.7-40.6c1.6-8.5-7.3-6.1-8.1-4.1s-6.3 14.8-6.7 28.2c0 0-4.7-12.8-5.1-17.4c-.4-4.7-5.3-5.9-8.1-1.4S20.3 66.2 20.3 66.2l-5.5-28.4s-5.5-7.3-8.7 1.6c0 0 5.7 34.9 7.7 37.3zm73.2-31c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1c2.7-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2c-2.2-1.3-3.6-4.8-3.6-10.8c2-9.7 6.4-11 8.7-10.8c4.3 2.3 4.1 7.4 3.8 11.4zm38.4-12.5c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1c2.6-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2c-2.2-1.3-3.6-4.8-3.6-10.8c2-9.7 6.4-11 8.7-10.8c4.2 2.3 4 7.4 3.8 11.4z"
      ></path>
      <path fill="#7f54b3" d="m61.3 89.1l22.3 13.1l-4.7-13.1l-12.8-3.6z"></path>
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 302 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#27346A"
        d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765"
      ></path>
      <path
        fill="#27346A"
        d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74"
      ></path>
      <path
        fill="#2790C3"
        d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477"
      ></path>
      <path
        fill="#1F264F"
        d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865"
      ></path>
    </svg>
  ),
  tensorflow: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#FF6F00"
          d="m124.228 229l-33.605-20.11V90.31L40 120.459l.123-44.914L124.228 26zm7.556-203v203l33.609-20.11v-57.109l25.37 15.114l-.151-39.062l-25.219-14.845V90.31L216 120.459l-.122-44.914z"
        ></path>
      </g>
    </svg>
  ),
  pytorch: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#EE4C2C"
          d="m180.975 90.415l-13.408 13.409c21.941 21.941 21.941 57.291 0 78.826c-21.942 21.941-57.292 21.941-78.827 0c-21.94-21.941-21.94-57.291 0-78.826l34.741-34.74l4.876-4.876V38L75.941 90.415c-29.255 29.255-29.255 76.389 0 105.644s76.389 29.255 105.034 0c29.255-29.459 29.255-76.389 0-105.644"
        ></path>
        <path
          fill="#EE4C2C"
          d="M154.768 87.165c5.385 0 9.751-4.366 9.751-9.752s-4.366-9.752-9.751-9.752c-5.386 0-9.752 4.366-9.752 9.752s4.366 9.752 9.752 9.752"
        ></path>
      </g>
    </svg>
  ),
  keras: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#d00000" d="M128 128H0V0h128z"></path>
      <path
        fill="#fff"
        d="M34.1 99.3c0 .1.1.2.1.3l2.2 2.2c.1.1.2.1.3.1h7.5c.1 0 .2-.1.3-.1l2.2-2.2c.1-.1.1-.2.1-.3V75.5c0-.1.1-.2.1-.3l9.5-9.1c.1-.1.2-.1.2 0l24.1 35.6c.1.1.2.1.3.1h10.6c.1 0 .2-.1.3-.2l1.9-3.7v-.3L65.7 56.9c-.1-.1 0-.2 0-.3l25.9-25.8c.1-.1.1-.2.1-.3V30c0-.1 0-.2-.1-.3l-1.5-3.4c0-.1-.1-.2-.2-.2H79.4c-.1 0-.2.1-.3.1L47 58.5c-.1.1-.1 0-.1-.1V28.9c0-.1-.1-.2-.1-.3l-2.2-2.3c-.1-.1-.2-.1-.3-.1h-7.6c-.1 0-.2.1-.3.1l-2.2 2.4c-.1.1-.1.2-.1.3z"
      ></path>
    </svg>
  ),
  pandas: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#130754"
        d="M46.236 7.567h13.99v29.047h-13.99Zm0 59.668h13.99V96.28h-13.99Z"
      ></path>
      <path fill="#ffca00" d="M46.236 45.092h13.99v13.705h-13.99Z"></path>
      <path
        fill="#130754"
        d="M23.763 31.446h13.989V128h-13.99ZM68.245 91.2h13.99v29.046h-13.99Zm0-59.72h13.99v29.047h-13.99Z"
      ></path>
      <path fill="#e70488" d="M68.245 69.011h13.99v13.705h-13.99Z"></path>
      <path fill="#130754" d="M90.248 0h13.99v96.554h-13.99Z"></path>
    </svg>
  ),
  numpy: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#4DABCF"
        d="m55.012 26.006l-21.38-10.789L10.154 26.93l21.969 11.027Zm9.808 4.951L87.241 42.28L63.982 53.955l-22-11.043Zm29.948-15.581l23.037 11.552L97.2 37.272L74.735 25.938ZM84.853 10.4L64.113 0L43.598 10.24L64.97 21.014ZM68.64 99.702V128l25.122-12.537l-.023-28.31ZM93.727 77.27l-.028-28.012l-25.06 12.458V89.74Zm30.158-5.246v28.41l-21.43 10.69l-.017-28.279zm0-9.935V34.25l-21.47 10.673l.016 28.068z"
      ></path>
      <path
        fill="#4c75cf"
        d="m59.77 61.716l-16.918-8.512V89.97s-20.7-44.033-22.612-47.99c-.246-.513-1.263-1.07-1.522-1.209c-3.731-1.947-14.603-7.45-14.603-7.45v64.977l15.04 8.063V72.382s20.478 39.346 20.689 39.78c.214.429 2.257 4.57 4.459 6.028c2.92 1.939 15.458 9.477 15.458 9.477z"
      ></path>
    </svg>
  ),
  matplotlib: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#fff"
        d="M63.975 125.09c-16.317 0-31.658-6.355-43.197-17.893S2.885 80.318 2.885 64S9.24 32.341 20.778 20.803S47.657 2.91 63.975 2.91s31.659 6.355 43.198 17.893S125.065 47.682 125.065 64s-6.355 31.659-17.893 43.198s-26.879 17.892-43.197 17.892"
      ></path>
      <path
        fill="none"
        stroke="#858585"
        strokeDasharray=".407 .814"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="7.976"
        strokeWidth=".856"
        d="M63.974 63.784h61.09m-61.09 0l43.197-43.196M63.974 63.784V2.694m0 61.09L20.778 20.588m43.196 43.196H2.884m61.09 0l-43.196 43.197m43.196-43.197v61.09m0-61.09l43.197 43.197"
        opacity=".9"
      ></path>
      <g
        fill="none"
        stroke="#818181"
        strokeDasharray=".407 .814"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeMiterlimit="199.409"
        strokeWidth=".856"
      >
        <path
          d="m70.764 63.784l-.202-1.643l-.593-1.543l-.949-1.355l-1.25-1.085l-1.474-.751l-1.61-.373l-1.654.03l-1.599.429l-1.447.801l-1.209 1.128l-.9 1.388l-.539 1.565l-.145 1.649l.259 1.634l.646 1.523l.994 1.321l1.286 1.041l1.5.698l1.623.316l1.653-.086l1.582-.484l1.418-.852l1.17-1.17l.851-1.417l.484-1.582l.105-1.182h0"
          opacity=".9"
        ></path>
        <path
          d="m84.339 63.784l-.198-2.833l-.59-2.779l-.973-2.669l-1.333-2.509l-1.67-2.299l-1.973-2.044l-2.238-1.75l-2.461-1.42l-2.633-1.064l-2.758-.688l-2.825-.297l-2.84.099l-2.797.494l-2.702.877l-2.554 1.246l-2.356 1.588l-2.111 1.901l-1.826 2.177l-1.506 2.408l-1.155 2.596l-.782 2.73l-.396 2.814v2.842l.396 2.814l.782 2.73l1.155 2.596l1.506 2.408l1.826 2.177l2.111 1.902l2.356 1.588l2.554 1.245l2.702.877l2.798.494l2.84.1l2.824-.298l2.758-.687l2.633-1.065l2.461-1.42l2.238-1.75l1.973-2.044l1.67-2.299l1.333-2.51l.972-2.668l.591-2.779l.198-2.83h0"
          opacity=".9"
        ></path>
        <path
          d="m97.914 63.784l-.185-3.548l-.555-3.509l-.92-3.43l-1.272-3.317l-1.613-3.166l-1.935-2.978l-2.236-2.762l-2.512-2.511l-2.761-2.236l-2.979-1.935l-3.165-1.613l-3.317-1.273l-3.43-.919l-3.51-.555l-3.548-.185l-3.548.185l-3.508.555l-3.43.92l-3.318 1.272l-3.165 1.613l-2.979 1.935l-2.761 2.236l-2.512 2.511l-2.236 2.762l-1.935 2.978l-1.613 3.166l-1.273 3.317l-.919 3.43l-.555 3.509l-.185 3.548l.185 3.548l.555 3.509l.92 3.43l1.272 3.317l1.613 3.166l1.935 2.978l2.236 2.762l2.512 2.511l2.761 2.236l2.979 1.935l3.165 1.614l3.317 1.272l3.43.92l3.51.555l3.547.185l3.549-.185l3.508-.556l3.43-.919l3.318-1.272l3.165-1.614l2.979-1.935l2.761-2.236l2.512-2.511l2.236-2.762l1.935-2.978l1.613-3.166l1.272-3.317l.92-3.43l.555-3.509l.185-3.548h0"
          opacity=".9"
        ></path>
        <path
          d="m111.489 63.784l-.26-4.966l-.78-4.911l-1.286-4.804l-1.782-4.642l-2.257-4.432l-2.709-4.171l-3.13-3.866l-3.516-3.517l-3.866-3.13l-4.171-2.709L83.3 20.38l-4.642-1.781l-4.804-1.287l-4.912-.779l-4.966-.26l-4.966.26l-4.91.779l-4.805 1.287l-4.642 1.781l-4.432 2.257l-4.17 2.71l-3.867 3.13l-3.517 3.516l-3.13 3.866l-2.708 4.17l-2.257 4.433l-1.782 4.642l-1.287 4.804l-.778 4.911l-.261 4.966l.26 4.966l.779 4.911l1.287 4.805l1.782 4.642l2.257 4.431l2.709 4.171l3.13 3.866l3.516 3.517l3.866 3.13l4.171 2.709l4.432 2.257l4.642 1.781l4.804 1.288l4.911.778l4.966.26l4.966-.26l4.912-.778l4.804-1.288l4.642-1.781l4.432-2.257l4.17-2.71l3.867-3.129l3.516-3.517l3.13-3.866l2.71-4.17l2.256-4.432l1.782-4.642l1.287-4.805l.778-4.91l.261-4.967h0"
          opacity=".9"
        ></path>
      </g>
      <path
        fill="#11557c"
        d="M64 126c-16.56 0-32.13-6.449-43.84-18.159S2 80.561 2 64s6.449-32.13 18.159-43.841S47.439 2 64 2s32.131 6.449 43.841 18.159S126 47.439 126 64s-6.449 32.131-18.159 43.841S80.561 126 64 126M64 3.82c-16.074 0-31.187 6.26-42.553 17.626C10.08 32.813 3.82 47.925 3.82 64s6.26 31.188 17.626 42.554S47.925 124.18 64 124.18s31.188-6.26 42.554-17.626S124.18 80.075 124.18 64s-6.26-31.187-17.626-42.554C95.187 10.08 80.075 3.82 64 3.82"
      ></path>
      <path
        fill="#004cff"
        d="m63.975 63.784l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.025.046l.013.041l.013.041l.013.041l.013.041l.013.041l.012.041l.012.041l.011.039l.012.041l.012.041l.012.041l.012.041l.011.041l.011.041l.011.041l.011.041l.011.041l.011.041l.011.041l.011.041l.01.041l.01.041l.01.041l.01.041l.01.041l.01.042l.01.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.008.042l.008.042l.008.042l.008.042l.008.042l.008.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.006.042l.006.042l.006.042l.006.042l.006.042l.006.042l.006.042l.005.042l.005.042l.005.042l.005.042l.005.042l.005.042l.005.042l.005.042l.004.042l.004.042l.004.042l.004.042l.004.042l.004.042l.004.043l.003.043l.003.043l.003.043l.003.043l.003.043l.003.043l.003.043l.003.043l.002.043l.002.043l.002.043l.002.043l.002.043l.002.043l.002.043l.001.043l.001.043l.001.043l.001.043l.001.043l.001.043l.001.043v.172H64.11z"
        opacity=".6"
      ></path>
      <path
        fill="#ceff29"
        d="m63.975 63.784l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.154-.411l.143-.381l.143-.381l.12.045l.12.046l.119.046l.119.046l.119.047l.119.047l.119.047l.119.048l.119.048l.118.049l.118.049l.118.049l.118.05l.118.05l.118.05l.117.051l.117.051l.117.051l.117.052l.117.052l.117.053l.116.053l.116.053l.116.054l.116.054l.116.054l.116.055l.115.055l.115.055l.115.056l.115.056l.115.057l.115.057l.114.057l.114.058l.114.058l.114.058l.114.059l.113.059l.113.059l.113.06l.113.06l.113.061l.113.061l.112.061l.112.062l.112.062l.112.062l.112.063l.111.063l.111.063l.111.064l.111.064l.111.064l.11.065l.11.065l.11.065l.11.066l.11.066l.109.066l.109.067l.109.067l.109.067l.108.068l.108.068l.108.068l.108.069l.108.069l.107.069l.107.07l.107.07l.107.071l.107.071l.106.071l.106.072l.106.072l.106.072l.105.073l.105.073l.105.073l.105.074l.104.074l.104.074l.104.074l.104.075l.104.075l.103.075l.103.076l.103.076l.103.076l.102.077l.102.077l.102.077l.102.078l.101.078l.101.078l.101.079l.101.079l.1.079l.1.08l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.252.324l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.253.32l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.252.332l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.32l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.252.328l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318z"
        opacity=".6"
      ></path>
      <path
        fill="#ff6800"
        d="m63.975 63.784l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.349-.403l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l.197-.164l.198-.163l.198-.162l.199-.161l.2-.16l.201-.159l.201-.158l.202-.157l.203-.156l.204-.155l.204-.154l.205-.153l.206-.152l.206-.151l.207-.15l.208-.149l.209-.148l.209-.147l.21-.146l.211-.145l.211-.144l.212-.143l.213-.142l.213-.141l.214-.14l.215-.139l.215-.138l.216-.137l.217-.136l.217-.135l.218-.134l.219-.133l.219-.132l.22-.131l.22-.13l.221-.129l.222-.128l.222-.127l.223-.126l.223-.125l.224-.124l.225-.123l.225-.122l.226-.121l.226-.12l.227-.118l.227-.117l.228-.116l.228-.115l.229-.114l.23-.113l.23-.112l.231-.111l.231-.11l.232-.109l.232-.108l.233-.107l.233-.105l.234-.104l.234-.103l.235-.102l.235-.101l.236-.1l.236-.099l.237-.098l.237-.097l.237-.095l.238-.094l.238-.093l.239-.092l.239-.091l.24-.09l.24-.089l.24-.088l.241-.086l.241-.085l.242-.084l.242-.083l.242-.082l.243-.081l.243-.08l.244-.078l.244-.077l.244-.076l.245-.075l.245-.074l.245-.073l.246-.072l.246-.07l.246-.069l.247-.068l.247-.067l.247-.066l.248-.065l.248-.063l.248-.062l.249-.061l.249-.06l.249-.059l.249-.058l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.113.543l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529z"
        opacity=".6"
      ></path>
      <path
        fill="#ffc400"
        d="m63.975 63.784l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.463.083l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.462.083l-.468.085l-.468.085l-.468.085l-.466.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.456.081l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.45.079l-.468.085l-.468.085l-.468.085l-.466.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.052-.294l-.051-.294l-.049-.295l-.047-.295l-.045-.295l-.038-.297l-.041-.296l-.039-.296l-.038-.296l-.036-.296l-.034-.297l-.032-.297l-.03-.297l-.028-.297l-.026-.297l-.024-.298l-.023-.298l-.021-.298l-.019-.298l-.017-.298l-.015-.298l-.013-.298l-.011-.298l-.009-.298l-.008-.298l-.006-.298l-.004-.299l-.002-.299v-.299l.002-.299l.004-.299l.005-.298l.007-.298l.009-.298l.011-.298l.013-.298l.015-.298l.017-.298l.019-.298l.02-.298l.022-.298l.024-.298l.026-.297l.028-.297l.03-.297l.032-.297l.034-.297l.035-.296l.037-.296l.039-.296l.041-.296l.043-.295l.045-.295l.047-.295l.048-.295l.05-.294l.052-.294l.054-.294l.056-.293l.058-.293l.059-.293l.061-.292l.063-.292l.065-.291l.067-.291l.069-.291l.07-.29l.072-.29l.074-.289l.076-.289l.078-.288l.08-.288l.081-.287l.083-.287l.085-.286l.087-.286l.089-.285l.09-.285l.092-.284l.094-.283l.096-.283l.097-.282l.099-.282l.101-.281l.103-.28l.105-.28l.106-.279l.108-.278l.11-.278l.112-.277l.113-.276l.115-.276l.117-.275l.118-.274l.12-.273l.122-.273l.124-.272l.125-.271l.127-.27l.129-.269l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206z"
        opacity=".6"
      ></path>
      <path
        fill="#29ffce"
        d="m63.975 63.784l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.224.151l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.232.137l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.231.138l-.223.155l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.036l-.024-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.02-.037l-.02-.037l-.02-.037l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.041l-.019-.038l-.019-.038l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118z"
        opacity=".6"
      ></path>
      <path
        fill="#7dff7a"
        d="m63.975 63.784l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l-.131.022l-.132.022l-.132.021l-.132.021l-.132.02l-.132.019l-.132.019l-.132.018l-.132.018l-.132.017l-.132.017l-.132.016l-.132.016l-.132.015l-.132.015l-.132.014l-.133.014l-.133.013l-.133.013l-.133.012l-.133.012l-.133.011l-.133.011l-.133.01l-.133.01l-.133.009l-.133.009l-.133.008l-.133.007l-.133.007l-.133.007l-.133.006l-.133.005l-.133.005l-.133.004l-.133.004l-.133.003l-.133.003l-.133.002l-.133.002l-.133.001l-.133.001h-.266l-.133-.001l-.133-.001l-.133-.002l-.133-.002l-.133-.003l-.133-.003l-.133-.004l-.153-.047l-.133-.005l-.133-.005l-.133-.006l-.133-.007l-.134-.007l-.133-.008l-.133-.008l-.133-.009l-.133-.009l-.133-.01l-.133-.01l-.133-.011l-.133-.011l-.133-.012l-.133-.012l-.133-.013l-.133-.013l-.133-.014l-.132-.015l-.13-.015l-.132-.015l-.132-.016l-.132-.017l-.132-.017l-.132-.018l-.132-.018l-.132-.019l-.132-.019l-.132-.02l-.132-.02l-.132-.021l-.132-.021l-.131-.022l-.131-.022l-.131-.023l-.131-.023l-.131-.024l-.131-.024l-.131-.025l-.131-.025l-.131-.026l-.131-.026l-.131-.027l-.13-.027l-.13-.028l-.13-.028l-.13-.029l-.13-.029l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331z"
        opacity=".6"
      ></path>
      <path
        fill="#ff6800"
        d="m63.975 63.784l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.433.33l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l-.079.101l-.079.101l-.079.1l-.079.1l-.08.1l-.08.1l-.08.1l-.08.1l-.081.099l-.081.099l-.081.099l-.081.099l-.082.099l-.082.098l-.082.098l-.082.098l-.083.098l-.083.098l-.083.097l-.083.097l-.083.097l-.084.097l-.084.097l-.084.096l-.084.096l-.085.096l-.085.096l-.085.096l-.085.095l-.085.095l-.086.095l-.086.095l-.086.095l-.086.094l-.087.094l-.087.094l-.087.094l-.087.094l-.087.093l-.088.093l-.088.093l-.088.093l-.088.093l-.089.092l-.089.092l-.089.092l-.089.092l-.089.092l-.09.091l-.09.091l-.09.091l-.09.091l-.09.09l-.091.09l-.091.09l-.091.09l-.091.09l-.092.089l-.092.089l-.092.089l-.092.089l-.092.089l-.093.088l-.093.088l-.093.088l-.093.088l-.093.087l-.094.087l-.094.087l-.094.087l-.094.087l-.094.086l-.068.066l-.095.086l-.095.086l-.095.085l-.095.085l-.096.085l-.096.085l-.096.084l-.096.084l-.096.084l-.097.084l-.097.084l-.097.083l-.097.083l-.097.083l-.098.083l-.098.082l-.098.082l-.098.082l-.098.082l-.099.082l-.099.081l-.099.081l-.099.081l-.099.081l-.1.08l-.1.08l-.1.08l-.339-.425l-.338-.424l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.33-.414l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425z"
        opacity=".6"
      ></path>
      <path
        fill="#2c2c2c"
        d="m77.551 64.198l-13.576-.001a.414.414 0 0 1-.128-.806l12.912-4.194a.413.413 0 0 1 .521.265c.455 1.398.685 2.853.684 4.323a.413.413 0 0 1-.413.413m-10.965-.828h10.545a13 13 0 0 0-.516-3.258z"
      ></path>
      <path
        fill="#2c2c2c"
        d="M63.975 64.197a.414.414 0 0 1-.387-.558L77.899 25.51a.41.41 0 0 1 .532-.242a41 41 0 0 1 11.196 6.351a.414.414 0 0 1 .066.581L64.298 64.041a.42.42 0 0 1-.323.156m14.552-38.008L65.28 61.484l23.507-29.475a40.2 40.2 0 0 0-10.26-5.82"
      ></path>
      <path
        fill="#2c2c2c"
        d="M63.975 64.197a.42.42 0 0 1-.317-.148L28.857 22.364a.41.41 0 0 1 .052-.582A54.8 54.8 0 0 1 51.801 10.44a.414.414 0 0 1 .495.312l12.083 52.941a.415.415 0 0 1-.22.463a.44.44 0 0 1-.184.041M29.757 22.152l33.431 40.044l-11.607-50.857a54 54 0 0 0-21.824 10.813"
      ></path>
      <path
        fill="#2c2c2c"
        d="M17.224 72.681a.41.41 0 0 1-.406-.339c-1.813-9.884-.401-20.309 3.977-29.355a.414.414 0 0 1 .552-.193l42.808 20.615a.413.413 0 0 1-.106.78l-46.75 8.485a.3.3 0 0 1-.075.007m4.136-28.96c-4.103 8.678-5.448 18.61-3.801 28.067l45.09-8.183z"
      ></path>
      <path
        fill="#2c2c2c"
        d="M41.657 79.659a.42.42 0 0 1-.341-.178a28 28 0 0 1-2.177-3.738a.413.413 0 0 1 .193-.552l24.462-11.78a.413.413 0 0 1 .415.713L41.893 79.586a.4.4 0 0 1-.236.073m-1.59-3.904a27 27 0 0 0 1.697 2.913L59.42 66.436z"
      ></path>
      <path
        fill="#2c2c2c"
        d="M63.99 98.132c-2.58 0-5.165-.287-7.66-.857a.415.415 0 0 1-.311-.496l7.552-33.088c.044-.192.223-.354.415-.321a.41.41 0 0 1 .396.344l5.685 33.46a.414.414 0 0 1-.339.477a34 34 0 0 1-5.738.481m-7.072-1.574c4 .86 8.22.98 12.264.344l-5.267-30.999z"
      ></path>
      <path
        fill="#2c2c2c"
        d="M97.832 106.652a.41.41 0 0 1-.324-.156L63.651 64.041a.413.413 0 0 1 .577-.584l42.833 33.379a.414.414 0 0 1 .072.581a54.7 54.7 0 0 1-9.045 9.146a.4.4 0 0 1-.256.089M66.477 66.258l31.42 39.399a54 54 0 0 0 8.329-8.423z"
      ></path>
    </svg>
  ),
  jupyter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#4e4e4e"
        d="M6.648 67.352c0 3.91-.363 5.183-1.296 6.12c-1.036.81-2.383 1.255-3.782 1.255l.364 2.234c2.164.023 4.265-.637 5.906-1.856c.883-.93 1.539-2 1.93-3.152a7.79 7.79 0 0 0 .347-3.55V53.608H6.648zm25.883-1.762c0 1.676 0 3.172.153 4.469h-3.082l-.207-2.66c-.645.94-1.567 1.718-2.672 2.25a8.055 8.055 0 0 1-3.621.788c-3.004 0-6.579-1.406-6.579-7.148v-9.543h3.473v8.938c0 3.105 1.113 5.183 4.246 5.183a5.472 5.472 0 0 0 1.883-.308a4.993 4.993 0 0 0 1.594-.914a4.197 4.197 0 0 0 1.058-1.375a3.638 3.638 0 0 0 .36-1.625V53.633h3.468V65.5zm6.579-6.527c0-2.079 0-3.778-.157-5.317h3.11l.152 2.793c.695-1.012 1.691-1.84 2.887-2.398A8.493 8.493 0 0 1 49 53.363c4.613 0 8.082 3.332 8.082 8.29c0 5.855-4.168 8.761-8.676 8.761a7.606 7.606 0 0 1-3.332-.621c-1.027-.45-1.906-1.121-2.547-1.95v8.938H39.11zm3.417 4.355c.008.406.063.812.157 1.207c.293.992.96 1.871 1.898 2.5s2.094.965 3.281.965c3.653 0 5.801-2.57 5.801-6.3c0-3.263-2.02-6.056-5.672-6.056c-1.445.102-2.797.653-3.804 1.555c-1.004.902-1.598 2.086-1.66 3.336zm20.739-9.688l4.172 9.63a50.836 50.836 0 0 1 1.214 3.328c.364-.981.75-2.235 1.22-3.395l3.78-9.563h3.653l-5.18 11.618c-2.59 5.586-4.172 8.468-6.555 10.21c-1.199.95-2.664 1.61-4.246 1.922l-.855-2.5a9.76 9.76 0 0 0 3.031-1.453c1.262-.89 2.266-2.023 2.926-3.308a2.05 2.05 0 0 0 .285-.715a2.342 2.342 0 0 0-.234-.781l-7.043-15.04h3.78zm23.25-4.687v4.691h4.972v2.235h-4.972v8.804c0 2.012.675 3.172 2.59 3.172a8.95 8.95 0 0 0 2.019-.203l.156 2.238a9.845 9.845 0 0 1-3.082.399a5.507 5.507 0 0 1-2.035-.27a4.921 4.921 0 0 1-1.719-.98c-1.054-1.219-1.535-2.734-1.347-4.246v-8.938h-2.953v-2.234h3.003v-3.977zm11.367 13.375c-.07.758.05 1.52.355 2.23a5.218 5.218 0 0 0 1.407 1.899a6.257 6.257 0 0 0 2.203 1.215c.824.265 1.71.367 2.586.308a14.312 14.312 0 0 0 5.18-.851l.597 2.234a17.75 17.75 0 0 1-6.344 1.008c-1.27.074-2.539-.09-3.726-.477a9.07 9.07 0 0 1-3.153-1.777c-.89-.781-1.578-1.719-2.008-2.75a6.664 6.664 0 0 1-.492-3.219c0-4.918 3.395-8.804 8.938-8.804c6.215 0 7.77 4.691 7.77 7.687c.03.461.03.922 0 1.383H97.804zm10.152-2.234a3.67 3.67 0 0 0-.144-1.79a4.075 4.075 0 0 0-.993-1.57a4.844 4.844 0 0 0-1.656-1.078a5.534 5.534 0 0 0-2.023-.39c-1.422.09-2.758.632-3.739 1.527c-.984.89-1.543 2.066-1.57 3.3zm8.425-1.375c0-1.918 0-3.575-.155-5.094h3.11v3.195h.155c.325-.984 1-1.86 1.926-2.5c.93-.64 2.067-1.015 3.254-1.074c.324-.035.656-.035.984 0v2.793a6.071 6.071 0 0 0-1.191 0c-1.176.039-2.297.445-3.148 1.144c-.856.7-1.383 1.645-1.489 2.653c-.097.46-.148.922-.156 1.386v8.692h-3.418V58.832zm0 0"
      ></path>
      <path
        fill="#767677"
        d="M109.766 7.281a7.691 7.691 0 0 1-1.09 4.282a7.583 7.583 0 0 1-3.262 2.949a7.49 7.49 0 0 1-4.34.62a7.525 7.525 0 0 1-3.953-1.913A7.642 7.642 0 0 1 95.137 5a7.606 7.606 0 0 1 2.629-3.531a7.509 7.509 0 0 1 4.136-1.461a7.51 7.51 0 0 1 5.422 1.996a7.627 7.627 0 0 1 2.438 5.273zm0 0"
      ></path>
      <path
        fill="#f37726"
        d="M65.758 96.79c-20.098 0-37.649-7.364-46.766-18.267a49.95 49.95 0 0 0 18.102 24.254a49.251 49.251 0 0 0 28.676 9.215a49.279 49.279 0 0 0 28.675-9.215a49.917 49.917 0 0 0 18.094-24.254C103.406 89.426 85.855 96.79 65.758 96.79zm-.008-70.907c20.098 0 37.652 7.367 46.766 18.265a49.95 49.95 0 0 0-18.102-24.253a49.27 49.27 0 0 0-28.672-9.22a49.27 49.27 0 0 0-28.672 9.22a49.909 49.909 0 0 0-18.1 24.253c9.132-10.878 26.682-18.265 46.78-18.265zm0 0"
      ></path>
      <path
        fill="#9e9e9e"
        d="M38.164 117.984a9.671 9.671 0 0 1-1.371 5.399a9.5 9.5 0 0 1-9.59 4.504a9.405 9.405 0 0 1-4.98-2.418a9.671 9.671 0 0 1-2.809-4.797a9.73 9.73 0 0 1 .313-5.567a9.624 9.624 0 0 1 3.328-4.453a9.466 9.466 0 0 1 12.043.688a9.63 9.63 0 0 1 3.066 6.648zm0 0"
      ></path>
      <path
        fill="#616262"
        d="M21.285 23.418a5.53 5.53 0 0 1-3.14-.816a5.627 5.627 0 0 1-2.618-5.672a5.612 5.612 0 0 1 1.407-2.95a5.593 5.593 0 0 1 2.789-1.664a5.46 5.46 0 0 1 3.238.184a5.539 5.539 0 0 1 2.586 1.969a5.66 5.66 0 0 1-.399 7.129a5.557 5.557 0 0 1-3.867 1.82zm0 0"
      ></path>
    </svg>
  ),
  openai: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z"
      ></path>
    </svg>
  ),
  solidity: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#65AFFF" rx="60"></rect>
        <path
          fill="#000"
          d="m165.536 25l-37.53 58.79H53L90.503 25z"
          opacity=".45"
        ></path>
        <path
          fill="#000"
          d="M128.006 83.79h75.033L165.536 25H90.503z"
          opacity=".6"
        ></path>
        <path
          fill="#000"
          d="m90.503 142.557l37.503-58.767L90.503 25L53 83.79z"
          opacity=".8"
        ></path>
        <path
          fill="#000"
          d="m90.867 230.742l37.529-58.79h75.033l-37.53 58.79z"
          opacity=".45"
        ></path>
        <path
          fill="#000"
          d="M128.396 171.952H53.363l37.503 58.79H165.9z"
          opacity=".6"
        ></path>
        <path
          fill="#000"
          d="m165.899 113.185l-37.503 58.767l37.503 58.79l37.529-58.79z"
          opacity=".8"
        ></path>
      </g>
    </svg>
  ),
  web3: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#f16822"
        d="M109.043 26.03c-4.368-2.524-8.284-3.752-11.62-4.247c-.87-1.903-3.003-4.138-7.337-6.612c-14.222-8.122-28.436-.085-28.436-.085L42.684 26.03l9.479 5.469L71.12 20.555s4.743-2.74 9.478 0c4.744 2.738 0 5.477 0 5.477L61.642 36.978l9.479 5.469L90.094 31.49c.282-.162 4.872-2.645 9.462.01c4.743 2.739 0 5.469 0 5.469L80.599 47.917l9.478 5.477l23.701-13.684s9.479-5.47-4.735-13.677z"
      ></path>
      <path
        fill="#808285"
        d="M42.684 26.03s-4.744 2.74-4.744 8.209v27.335s0 5.478-4.743 2.739c-4.744-2.74-4.744-8.207-4.744-8.207V28.77q0-.512.051-.998c.52-4.812 4.684-7.218 4.684-7.218l-9.479-5.468s-.01 0-.017.01c-.281.162-4.726 2.9-4.726 8.198V50.63s0 5.477-4.744 2.739C9.48 50.628 9.48 45.16 9.48 45.16V17.827c0-5.47 4.743-8.208 4.743-8.208L4.744 4.14S0 6.88 0 12.348v27.336s0 16.423 14.222 24.63c4.36 2.517 7.38 2.714 9.479 1.784c2.099 3.353 5.119 6.646 9.479 9.163c14.222 8.207 14.222-8.208 14.222-8.208V39.718c0-5.477 4.743-8.208 4.743-8.208z"
      ></path>
      <path
        fill="#bcbec0"
        d="M80.6 47.924s-4.745 2.738-4.745 8.207v27.336s0 5.476-4.744 2.738c-4.743-2.74-4.744-8.207-4.744-8.207L56.89 72.52s0 16.424 14.222 24.63c14.223 8.21 14.223-8.207 14.223-8.207V61.61c0-5.47 4.742-8.209 4.742-8.209zm-23.694 2.799v10.945l9.479 5.469V56.19l-9.479-5.468zm45.026 11.64c-3.556.026-7.112 2.079-7.112 10.184c0 16.21 14.223 24.629 14.223 24.629l4.744 2.74s4.742 2.738 4.742 8.207c0 5.477-4.742 2.738-4.742 2.738L94.82 99.914v10.947l18.957 10.948S128 130.015 128 113.599c0-16.414-9.479-21.892-9.479-21.892l-9.478-5.469s-4.744-2.738-4.744-8.207c0-5.486 4.744-2.746 4.744-2.746v-.002L128 86.23V75.285L109.043 64.34s-3.556-2.002-7.111-1.977"
      ></path>
    </svg>
  ),
  ethers: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M24 17.443c-12.547 1.64-21.503 3.61-21.636-4.474c0 0 .274-3.133 4.116-3.33c0 0 .13-2.782 3.065-3.097c1.578-.171 3.37 1.454 3.565 3.165c0 0 3.883-.719 4.051 3.067c.059 1.32-.238 3.563-3.983 3.465c0 0-2.167-.294-2.461-3.644c-.61 6.485 8.767 6.108 8.902.218c.06-2.547-1.572-5.167-5.246-4.676c-2.014-5.066-7.375-4.775-9.37-.076c-2.854 0-5.035 2.196-5.003 5.064c.11 9.23 12.954 6.447 24 4.318"
      ></path>
    </svg>
  ),
  metamask: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#E17726" d="M250.066 0L140.219 81.279l20.427-47.9z"></path>
      <path
        fill="#E27625"
        d="m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z"
      ></path>
      <path
        fill="#E27625"
        d="m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z"
      ></path>
      <path
        fill="#D5BFB2"
        d="m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z"
      ></path>
      <path
        fill="#233447"
        d="m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z"
      ></path>
      <path
        fill="#CC6228"
        d="m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z"
      ></path>
      <path
        fill="#E27525"
        d="m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z"
      ></path>
      <path
        fill="#F5841F"
        d="m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z"
      ></path>
      <path
        fill="#C0AC9D"
        d="m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z"
      ></path>
      <path
        fill="#161616"
        d="m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z"
      ></path>
      <path
        fill="#763E1A"
        d="M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z"
      ></path>
      <path
        fill="#F5841F"
        d="m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z"
      ></path>
    </svg>
  ),
  django: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#092E20" rx="60"></rect>
        <path
          fill="#fff"
          d="M112.689 51h28.615v132.45c-14.679 2.787-25.456 3.902-37.161 3.902C69.209 187.351 51 171.559 51 141.271c0-29.173 19.325-48.124 49.24-48.124c4.645 0 8.175.37 12.449 1.485zm0 66.671c-3.344-1.113-6.131-1.485-9.661-1.485c-14.493 0-22.856 8.919-22.856 24.526c0 15.238 7.991 23.599 22.67 23.599c3.157 0 5.76-.186 9.847-.742z"
        ></path>
        <path
          fill="#fff"
          d="M186.826 95.19v66.332c0 22.856-1.672 33.818-6.689 43.295c-4.646 9.106-10.778 14.865-23.413 21.183l-26.571-12.636c12.635-5.945 18.767-11.146 22.668-19.139c4.089-8.175 5.391-17.652 5.391-42.55V95.189zm-28.614-44.038h28.614V80.51h-28.614z"
        ></path>
      </g>
    </svg>
  ),
  flask: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#000"
          d="M89.778 193.926c-7.238-5.693-14.96-11.151-20.235-18.837c-11.102-13.554-19.65-29.247-25.494-45.737c-3.532-10.724-4.741-22.22-9.295-32.53c-4.763-7.487.817-15.671 9.018-18.051c3.651-.701 10.072-4.145 2.322-1.684c-6.948 5.098-7.62-4.627-.496-5.243c4.862-.646 6.652-4.627 4.99-8.21c-5.22-3.404 12.656-7.145 3.662-12.223c-9.37-10.11 13.106-12.055 7.56-.575c-1.327 8.829 15.706-1.618 11.754 8.577c4.017 4.896 15.042 1.114 14.768 7.983c5.852.402 7.86 5.325 13.353 5.703c5.693 2.571 16.013 4.597 17.95 11.012c-5.648 4.472-18.726-9.236-19.355 3.141c1.706 18.285 1.272 37.121 7.962 54.533c3.164 10.543 10.835 18.843 17.762 27.054c6.629 8.042 15.607 13.704 24.758 18.471c8.028 3.786 16.682 6.297 25.431 7.872c3.548-2.714 9.813-12.804 15.349-8.549c.262 4.781-10.987 9.994-.53 9.465c6.141-1.852 10.4 4.75 15.457-1.205c4.659 5.518 19.364-3.526 16.049 7.754c-4.482 2.892-11.02 1.144-15.509 5.122c-7.403-3.697-13.296 3.309-21.491 2.423c-9.101 1.63-18.36 2.288-27.587 2.302c-15.137-1.196-30.595-1.7-44.995-6.97c-8.112-2.357-16.029-6.977-23.158-11.598m12.784 5.539c7.921 3.426 15.667 7.036 24.348 8.125c13.773 1.916 27.996 4.862 41.818 2.175c-6.256-2.825-12.723 1.1-18.956-2.02c-7.474 1.608-15.496-.41-23.094-1.404c-8.642-3.849-17.967-6.495-26.059-11.492c-10.112-3.693 5.229 4.737 7.96 5.419c6.321 3.588-6.951-1.839-8.822-3.33c-5.294-2.97-5.969-2.349-.524.667c1.096.641 2.18 1.314 3.329 1.86m-15.073-10.652c7.676 2.844-.034-5.397-3.551-4.919c-1.559-2.703-5.954-4.411-2.853-5.864c-5.578 1.937-5.843-7.363-8.465-6.034c-5.9-1.863-2.296-8.464-9.325-12.517c-.642-4.271-6.983-7.975-9.006-14.417c-.893-3.298-7.164-12.77-3.312-3.955c3.28 8.486 9.051 15.753 13.854 23.011c3.73 6.911 8.133 14.134 14.925 18.446c2.29 2.196 4.5 5.561 7.733 6.249m-22.113-24.278c.268-1.159 1.404 2.509 0 0m31.306 27.687c1.7-.761-2.445-.959 0 0m4.167 1.52c-.432-2.099-1.903 1.173 0 0m5.215 2.175c2.483-2.364-3.827-1.49 0 0m8.94 4.983c1.509-2.231-4.83-.842 0 0m-17.166-11.967c3.856-2.495-4.982-.034 0 0m3.912 1.951c-.109-1.319-1.394.591 0 0m19.556 12.206c3.143 1.984 18.357 4.348 8.831.813c-1.594.336-17.665-4.545-8.831-.813m-31.045-24.179c-.306-1.323-4.88-1.46 0 0m9.104 5.306c2.369-1.652-4.918-1.275 0 0m7.657 4.695c3.4-1.282-5.515-1.288 0 0m-20.466-14.035c3.69 2.829 14.877.362 5.65-1.689c-4.2-2.239-13.666-3.771-7.214 1.35zm25.653 15.656c1.536-2.618-6.444-1.495 0 0m-7.795-6.195c9.02 2.552-7.585-5.704-2.226-.939l1.188.538zm15.628 9.033c8.543.082-7.716-1.178 0 0m-36.773-23.437c-.333-1.591-2.108.134 0 0m51.223 31.543c.228-2.874-2.787 2.138 0 0m-36.644-22.615c-.517-1.513-2.67-.062 0 0m-13.768-9.926c4.904-.295-6.715-2.161 0 0m-16.31-10.543c-.61-2.351-5.337-4.226 0 0m42.818 27.174c-.899-1.025-.423.224 0 0m26.651 16.355c-.085-1.566-1.451.592 0 0m-29.01-18.791c.48-2.017-4.182-.611 0 0m-19.855-12.583c3.649-.391-5.845-2.467 0 0m33.586 20.87c5.686-2.253-5.541-1.1 0 0m-17.47-11.859c6.553.845-7.797-4.457-1.438-.475zm22.774 14.003c6.118-3.658 4.101 8.564 10.38 1.032c6.193-4.522-5.349 5.591 2.284.807c5.52-3.692 13.673 1.75 18.824 3.525c3.704-.182 7.304 3.203 11.102 1.144c7.309-1.969-14.294-2.92-8.631-6.413c-6.689 1.946-11.63-2.321-14.921-6.605c-7.503-1.733-16.177-5.568-19.921-12.207c-1.527-2.493 2.205.351-1.318-3.724c-4.521-4.021-6.778-8.585-9.813-13.473c-3.626-1.934-4.048-7.627-4.414-.191c.028-4.693-4.378-7.852-5.453-6.539c-.019-4.519 4.715-2.254 1.401-5.598c-.713-4.684-3.062-9.566-3.768-14.855c-1.097-2.549-.155-8.009-3.744-2.238c-1.308 6.1-.434-7.495 1.599-3.012c2.67-4.575-.958-4.037-1.106-3.402c1.738-3.859 1.1-9.334-.454-7.246c.926-4.091 1.464-15.055-1.387-13.112c1.728-4.278 3.277-19.575-4.224-13.743c-3.04.043-8.303 1.104-10.792 2.341c7.802 4.3-.784 1.553-3.96.87c-.414 3.98-3.56 2.258-7.49 2.297c6.277.777-3.056 6.42-6.657 4.228c-4.677 2.235 4.036 7.814.093 9.539c.485 2.601-7.164-.939-6.563 5.067c-4.54-1.91-.625 7.124 1.646 4.069c7.722 2.09 5.436 6.854 5.633 11.38c-1.259 2.638-6.212-6.199-1.104-5.789c-4.03-6.547-4.458-2.367-7.807.675c-.779.22 8.543 4.327 2.693 6.358c5.146.794 5.293 5.297 6.34 8.147c3.094 3.222 2.46-3.557 6.162.314c-2.342-3.449-12.406-9.719-4.303-7.708c-.043-3.472-1.466-6.271 1.017-6.203c2.458-4.452-2.575 10.977 2.966 5.319c1.534-.67 1.914-4.458 4.672.357c4.004 3.94 1.446 6.795-4.203 3.187c1.01 3.429 7.557 4.654 6.327 10.016c1.304 4.715 3.129 2.979 4.719 2.706c1.248 4.582 1.956 1.213 2.015-.968c5.713 1.223 4.375 4.6 6.162 6.959c3.936 1.777-5.634-12.044 1.124-4.156c7.11 6.42 2.666 9.1-3.714 8.071c4.038-.326 5.34 5.46 10.392 5.257c4.606 2.191 7.725 10.608-.215 7.104c-2.754-2.483-12.5-5.546-4.54-.823c7.352 3.404 13.191 5.441 20.282 9.714c5.074 3.623 7.266 7.772 9.19 8.593c-4.265 2.037-12.853-1.626-6.476-2.749c-3.977-.724-8.451-2.736-4.641 2.22c3.239 2.705 11.477 2.418 12.954 2.724c-1.252 2.759-3.4 2.978.051 3.192c-3.85 2.052 1.234 2.369 1.591 3.542m-7.873-22.234c-2.343-2.45-2.948-7.039-.416-3.046c1.298.521 4.16 7.498.416 3.046m25.641 16.287c1.461-.095.042 1.11 0 0m-29.34-22.294c-.09-3.704.847 2.856 0 0m-2.548-3.429c-2.947-5.693 3.714 1.612 0 0m-30.883-21.315c1.731-.462.852 2.961 0 0m24.579 13.322c1.063-3.992 1.249 3.35 0 0m-17.364-12.073c-1.224-2.203 2.56 2.066 0 0m14.902 4.777c-2.792-6.255 1.976-3.417.617 1.025zm-25.699-17.139c-1.248-2.051-3.312-8.072-2.648-9.91c.602 2.993 6.366 12.881 2.828 4.096c-3.91-7.364 4.673 2.391 5.556 4.227c.411 1.828-2.412-.499-.5 3.786c-3.488-4.878-2.059 2.694-5.236-2.199m-7.942-5.472c.327-4.771 1.818 3.271 0 0m3.573 1.229c1.704-3.6 2.89 5.02 0 0m-8.594-6.648c-2.957-2.938-5.097-5.646.138-1.823c2.017.079-4.481-6.16.486-1.981c5.223.952 2.58 8.564-.624 3.804m4.514-.118c1.717-1.701.912 1.676 0 0m2.778.891c-2.604-4.88 3.16 2.046 0 0m-5.522-5.277c-8.596-7.65 10.801 4 1.404 1.418zm24.629 14.31c-3.72-2.23-.986-15.702.282-6.488c3.617-1.17-.2 4.758 2.498 4.703c-.425 3.74-1.632 5.085-2.78 1.785m9.109 5.384c.365-4.06.768 2.776 0 0m-1.582-1.564c.41-1.734.042 2.043 0 0m-30.47-20.644c-5.522-7.619 16.05 7.707 3.537 1.933c-1.307-.342-2.88-.464-3.537-1.933m17.542 9.301c-.522-6.415 1.167 1.063 0 0m13.319 8.544c1.03-3.655.077 2.417 0 0m-30.015-20.753c3.282-.702 13.602 5.765 4.125 1.847c-1.053-1.165-3.298-.636-4.125-1.847m28.185 14.048c.35-6.56 1.959-3.919.012.939zm-25.742-16.33c1.338-1.962-3.55-8.87.705-2.478c1.838 1.461 5.322 2.447 2.246 3.062c4.838 4.268-1.18 1.156-2.95-.584m24.348 14.281c.924-7.473.815 4.378 0 0M69.67 99.463c1.02-.437.539 1.361 0 0m6.35 3.78c1.635-3.43 3.015 3.825 0 0m17.914 9.965c-.017-1.317.338 1.916 0 0m-1.037-2.297c-2.487-6.134 2.313 3.248 0 0m-1.527-4.022c-.417-2.535 1.418 3.184 0 0m2.485-4.039c-1.707-3.007 2.154-13.25 2.585-6.897c-1.8 4.95-.52 7.719.737 1.08c2.32-5.226-.501 10.311-3.322 5.817m2.553-15.234c.744-.913.165 1.1 0 0m-4.264 84.022c-1.011-.883.127.562 0 0m8.784 4.444c4.886 1.253 4.861-.761.445-1.359c-2.375-2.21-9.87-4.553-3.162-.274c.445 1.125 1.848 1.099 2.717 1.633M83.58 164.559c2.692 2.007 10.14 5.689 3.835.764c2.125-2.47-4.069-3.784-2.014-5.436c-5.227-3.198-4.123-2.914-.462-2.813c-6.28-2.808.907-2.598.569-4.036c-2.422-.479-12.03-4.271-6.378.311c-5.746-2.929-1.37 1.092-3.106.667c-5.875-1.603 5.233 4.474-.933 2.966c3.37 2.671 9.073 6.842 1.425 2.827c-1.008 1.45 5.473 3.649 7.064 4.75m9.187 5.278c11.171 3.599-5.477-4.398 0 0m47.029 28.49c.144-2.216-1.526 1.891 0 0m4.834 2.035c2.577-2.498.105 3.978 4.271-.612c.045-3.285-.129-5.226-4.787-1.235c-1.284.712-1.857 3.74.516 1.847M67.9 152.174c-.792-3.112-5.548-3.096 0 0m5.161 3.382c-1.916-3.178-6.839-2.877 0 0m29.364 17.709c2.867 2.546 13.168 1.868 3.483.313c-1.435-2.121-9.109-1.61-3.483-.313m40.367 24.929c4.412-3.702-4.276 1.652 0 0m9.176 6.306c.028-1.188-1.901.521 0 0m.015-1.663c4.886-5.177-4.735.306 0 0m-96.778-61.292c-4.165-5.942-2.59-8.613-6.605-13.464c-.76-3.71-6.89-12.13-3.17-3.21c3.406 5.216 4.419 13.293 9.775 16.674m95.245 59.646c8.989-5.81-3.69-2.531 0 0m6.862 2.689c4.502-3.866-2.847-.809 0 0M66.37 145.606c1.288-1.917-3.328-.246 0 0m89.509 56.438c4.359-2.81-1.004-2.379-.79.259zM96.725 164.76c-.15-1.898-2.301.161 0 0m3.656 2.103c-1.162-2.349-1.786.369 0 0m62.491 37.08c5.584-4.028-3.385-.771-1.172.763zm-2.138-1.033c4.549-3.812-4.803 1.689 0 0m10.925 7.275c3.054-2.045-3.711-.662 0 0m-102.49-65.962c4.095.918 16.361 10.083 9.125.634c-3.707-1.097-1.484-10.157-5.264-8.553c2.537 4.239 2.087 6.043-3.24 3.371c-6.696-3.269-3.763 1.619-2.455 2.967c-1.783.405 2.36 1.547 1.835 1.581m-18.651-14.73c.733-3.031-6.749-16.677-3.533-6.837c1.16 2.061 1.043 5.967 3.533 6.837m34.234 21.106c-2.108-1.763-.1-.249 0 0m5.192 1.209c-.003-3.212-5.739-1.304 0 0m44.987 28.36c-.858-2.194-3.392-.051 0 0m2.16 1.578c-.319-1.228-1.246.237 0 0m17.831 11.231c1.715-1.267-2.14-.161 0 0m-95.087-61.105c4.905-1.9-5.256-1.355 0 0m71.135 44.816c-.054-3.176-3.127.787 0 0m-73.073-49.333c3.15-1.064-2.915-.701 0 0m9.145 4.431c-.057-1.044-.967.395 0 0m111.551 68.404c4.052-.821 13.285 2.062 14.778-1.074c-4.921-.12-17.024-3.472-17.597.8l1.078.169zM69.949 132.518c.07-3.218-2.51-.12 0 0m-24.046-16.68c-1.093-6.132-4.154-.928 0 0m5.734 1.441c.07-1.969-5.249-1.772 0 0m3.277 1.609c-.948-.767-.742.97 0 0m20.619 13.227c.97-.891-2.299-.66 0 0M52.73 115.259c-.554-4.631-6.641-.694 0 0m-11.756-7.628c-.167-2.138-1.146.806 0 0m1.749-1.321c-.286-2.534-1.502.322 0 0m9.662 5.767c4.085-1.605-7.442-3.319-.835-.303zm129.308 79.872c2.615-2.397-3.323-.741 0 0m15.622 8.098c1.048-3.1-2.639.408 0 0M53.373 107.013c.43-2.998-3.24.595 0 0m-13.746-9.21c-.739-4.233-.638-11.664 6.425-9.153c-9.428 1.872 6.526 11.719 4.511 3.945c3.965.194 7.756-2.343 5.675 1.507c7.811-.863 13.227-7.636 20.772-6.687c5.877-.778 12.303-1.368 18.636-3.733c5.207-.376 10.22-5.982 7.366-9.305c-7.101-.6-14.535.288-22.384 1.848c-8.697 1.808-16.597 5.243-25.373 6.718c-8.554 1.149 1.72 3.165-.73 3.615c-4.463 1.548 5.323 2.593-.578 4.225c-3.645-.693-7.439-1.945-5.882-5.786c-8.194 1.063-15.393 4.464-8.92 12.802zM59.37 87.748c1.921-7.078 10.293 5.823 3.15.94c-.854-.639-2.257-1.16-3.15-.94m.374-3.432c2.773-2.065 1.474 1.158 0 0m3.52.056c.251-3.256 8.06 1.724 1.288 1.173zm4.817-1.936c1.759-2.055.505 1.828 0 0m1.232-.825c2.928-3.519 16.584-2.246 6.589-.343c-2.68-2.017-4.733 1.189-6.59.343m17.821-2.747c-.445-9.612 8.854 3.415 0 0m5.057-.028c1.849-4.844 7.174-1.944.855-.973c.138.515-.185 2.5-.855.973m-40.812 25.691c5.524-3.383-5.864-2.935 0 0m4.084 1.134c1.937-2.059-4.208-.835 0 0m-12.034-8.54c3.156-2.425-3.735-.922 0 0m163.107 102.04c.092-2.813-2.412 1.267 0 0m-16.573-11.311c.471-3.238-2.13.283 0 0m21.131 12.401c4.413.015 13.371-1.37 3.769-1.366c-1.507.235-8.779.185-3.769 1.366M59.056 103.676c3.571-.245 5.588-3.94-.69-3.727c-9.731-1.007 8.584 3.332-1.25 2.091c-1.32.875 1.863 1.878 1.94 1.636m3.145 1.592c-.373-2.293-1.104 1.219 0 0m3.731-9.949c1.55-1.922-2.144-.514 0 0M54.055 75.465c6.374-2.168 15.09-4.605 18.1 1.068c-3.063-3.687-1.236-7.316 1.656-1.926c4.091 5.454 6.139-2.48 3.478-4.31c3.032 3.768 6.48 5.548 2.03.239c4.837-5.818-9.683.761-12.983.695c-1.588.713-16.394 3.776-12.281 4.234m3.735-7.154c3.635-2.744 12.573 1.632 6.838-2.727c-.561-.495-12.56 3.305-6.838 2.727m13.253.547c4.254.109-1.835-5.715 3.234-3.076c-.832-2.72-5.902-3.23-8.38-4.316c-1.403 2.486 2.853 7.425 5.146 7.392m-10.929-12.03c1.472-1.995-2.58 1.011 0 0m5.417 1.296c6.856-.909-1.748-2.952-1.382-.073zm-10.114-7.913c-4.828-6.302 9.078 1.059 4.174-5.54c-4.128-3.286-8.095 3.7-4.174 5.54m61.952 33.369c2.214-3.925-9.141-5.29-1.492-1.391c.705.235.545 1.662 1.492 1.39"
        ></path>
      </g>
    </svg>
  ),
  linux: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
        <path
          fill="#ECEFF1"
          d="m85.95 199.926l24.53 13.62h37.096l34.702-26.055l15.556-40.859l-35.899-43.227l-10.171-24.278l-49.66 1.776l.598 13.62l-9.573 17.764l-14.958 29.016l-2.991 24.278z"
        ></path>
        <path
          fill="#263238"
          d="M187.064 114.656c-9.573-13.62-17.351-21.91-21.539-39.082s1.197-12.435-2.393-27.24c-1.795-7.697-4.787-13.027-7.778-17.172c-3.59-4.145-7.778-6.514-10.172-7.106c-5.384-2.96-17.949-7.698-33.505.592c-16.155 8.29-14.36 26.055-11.368 62.177c0 2.368-.599 5.33-1.795 7.698c-2.393 5.33-6.582 10.066-10.171 14.212c-4.189 5.921-8.377 11.843-11.368 18.356c-7.18 13.62-13.762 30.792-11.967 37.306c2.992-.592 40.686 56.255 40.686 57.439c2.393-.592 12.564-.592 21.539-.592c12.565-.592 19.744-1.184 29.916 1.184c0-1.776-.599-3.553-.599-5.329c0-3.553.599-6.514 1.197-10.659c.598-2.961 1.197-5.921 1.795-9.474c-5.983 5.329-16.753 11.251-26.924 13.027c-8.975 1.776-23.933-1.184-31.113-10.067c.599 0 1.795 0 2.394-.592c1.795-.592 3.59-1.184 4.188-2.368c1.795-2.961.598-5.922-.598-7.698c-1.197-1.777-10.172-8.291-14.36-11.843c-4.188-3.553-6.581-5.33-8.975-7.698l-4.786-4.738c-1.197-1.184-1.795-2.368-2.393-2.961c-1.197-2.96-1.795-6.513-1.197-11.25c.598-6.514 2.991-11.844 5.983-17.765c1.197-2.369 4.188-7.106 4.188-7.106s-10.171 24.871-4.786 32.569c0 0 .598-7.698 2.991-15.396c1.795-5.33 4.787-13.028 8.377-17.173s12.564-19.541 13.163-29.016c0-4.145.598-8.29.598-11.25c-2.393-2.37 39.489-8.29 41.882-1.777c.598 2.369 8.975 23.686 13.761 34.937c2.393 5.33 5.385 10.067 7.18 15.988c1.795 6.514 2.991 15.396 2.991 24.279c0 1.776 0 4.737-.598 7.698c1.197 0 24.531-24.871-2.991-45.596c0 0 16.752 7.698 17.351 23.094c.598 12.435-4.787 22.502-5.983 24.278c.598 0 12.564 5.33 13.162 5.33c2.394 0 7.18-1.777 7.18-1.777c.599-1.776 2.393-6.514 2.393-8.29c4.189-13.62-5.983-35.529-15.556-49.149"
        ></path>
        <path
          fill="#ECEFF1"
          d="M111.078 75.574c4.296 0 7.778-5.303 7.778-11.843c0-6.541-3.482-11.843-7.778-11.843S103.3 57.19 103.3 63.73s3.483 11.843 7.778 11.843m26.924 1.185c5.618 0 10.172-6.098 10.172-13.62S143.62 49.52 138.002 49.52c-5.617 0-10.171 6.098-10.171 13.62s4.554 13.62 10.171 13.62"
        ></path>
        <path
          fill="#212121"
          d="M115.424 64.541c-.497-3.893-2.761-6.817-5.056-6.53s-3.752 3.676-3.254 7.57c.497 3.893 2.76 6.817 5.055 6.53c2.295-.288 3.752-3.677 3.255-7.57m21.981 8.664c3.304 0 5.983-3.446 5.983-7.698c0-4.251-2.679-7.698-5.983-7.698c-3.305 0-5.984 3.447-5.984 7.698s2.679 7.698 5.984 7.698"
        ></path>
        <path
          fill="#FFC107"
          d="M216.98 195.781c-2.393-1.184-6.582-2.961-10.172-8.29c-1.794-2.961-1.196-11.251-4.188-14.804c-1.795-2.368-4.188-1.184-4.786-1.184c-5.385 1.184-17.95 9.474-26.326 0c-1.197-1.184-2.992-2.961-5.983-2.961c-2.992 0-4.188 1.184-5.385 3.553s-1.197 4.145-1.197 10.067c0 4.737 0 10.066-.598 14.211c-1.197 10.067-2.991 15.989-2.991 21.91c0 6.514 1.794 10.659 4.188 12.435c1.795 1.777 4.786 2.961 11.368 2.961c6.581 0 10.769-2.368 14.958-6.514c2.991-2.96 5.384-4.145 13.761-10.066c6.581-4.145 16.753-9.475 18.547-11.251c1.197-1.184 2.992-1.777 2.992-5.33c0-2.96-2.393-4.145-4.188-4.737m-120.261 1.777c-5.983-9.475-6.582-11.251-10.77-17.173c-3.59-5.921-11.368-17.172-16.154-17.172c-3.59 0-5.385 1.776-7.778 4.145c-2.394 2.368-4.787 7.698-8.975 10.659c-3.59 2.96-13.761 2.368-16.154 5.921s2.393 8.883 2.393 17.765c0 3.553-2.992 5.921-3.59 8.29c-.598 2.961-1.197 4.737 0 7.106c2.393 3.553 5.385 4.737 25.727 8.882c10.77 2.369 20.941 8.29 27.523 8.883c6.581.592 17.949 0 17.949-15.989c.599-9.474-4.786-11.843-10.171-21.317m11.368-107.18c-3.59-2.369-6.582-4.738-6.582-8.29c0-3.553 2.394-4.738 5.984-7.698c.598-.593 7.179-6.514 13.761-6.514s14.359 4.145 17.351 5.33c5.385 1.183 10.769 2.368 10.171 6.513c-.598 5.921-1.196 7.106-7.18 10.067c-4.188 1.184-11.966 7.698-17.351 7.698c-2.393 0-5.983 0-8.376-.593c-1.795-.592-4.787-3.553-7.778-6.513"
        ></path>
        <path
          fill="#634703"
          d="M106.89 85.64c1.197 1.185 2.992 2.37 4.787 2.961c1.196.592 2.991 1.185 2.991 1.185h5.385c2.992 0 7.18-1.185 11.368-3.553c4.188-1.777 4.787-2.961 7.778-4.145c2.992-1.777 5.983-3.553 4.787-4.145c-1.197-.593-2.394 0-6.582 2.368c-3.59 2.369-6.581 3.553-10.171 5.33c-1.795.592-4.188 1.776-5.983 1.776h-5.385c-1.795 0-2.992-.592-4.787-1.184c-1.196-.593-1.795-1.185-2.393-1.185c-1.196-.592-3.59-2.96-4.786-3.553c0 0-1.197 0-.599.593zm17.95-13.027c.598 1.184 1.795 1.184 2.393 1.776s1.197.593 1.197.593c.598-.593 0-1.777-.599-1.777c0-1.184-2.991-1.184-2.991-.592m-9.573 1.184c0 .593 1.196 1.185 1.196.593c.599-.593 1.197-1.185 1.795-1.185c1.197-.592.598-1.184-1.196-1.184c-1.197.592-1.197 1.184-1.795 1.776"
        ></path>
        <path
          fill="#455A64"
          d="M173.303 178.609v1.776c1.197 2.369 4.188 2.961 6.581 2.961c3.59 0 7.18-2.369 8.975-4.737c0-.592.598-1.185 1.197-1.777c1.196-1.776 1.795-2.96 2.393-3.553c0 0-.598-.592-.598-1.184c-.599-1.184-2.394-2.369-4.787-2.961c-1.795-.592-4.786-1.184-5.983-1.184c-5.385-.592-8.376 1.184-10.171 2.961c0 0 .598 0 .598.592c1.197 1.184 1.795 2.369 1.795 4.145c.598 1.184 0 1.776 0 2.961"
        ></path>
      </g>
    </svg>
  ),
  ubuntu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <g clipPath="url(#skillIconsUbuntuLight0)">
          <path
            fill="#F4F2ED"
            d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
          ></path>
          <path
            fill="#F47421"
            d="M127.5 206.25c43.492 0 78.75-35.258 78.75-78.75s-35.258-78.75-78.75-78.75s-78.75 35.258-78.75 78.75s35.258 78.75 78.75 78.75"
          ></path>
          <path
            stroke="#fff"
            strokeWidth="8.55"
            d="M127.5 165.694c21.094 0 38.194-17.1 38.194-38.194s-17.1-38.194-38.194-38.194s-38.194 17.1-38.194 38.194s17.1 38.194 38.194 38.194Z"
          ></path>
          <path
            fill="#F47421"
            d="M73.95 142.266c8.155 0 14.766-6.611 14.766-14.766s-6.611-14.766-14.766-14.766s-14.766 6.611-14.766 14.766s6.611 14.766 14.766 14.766"
          ></path>
          <path fill="#000" d="M157.25 127.5h17.5z"></path>
          <path
            stroke="#F47421"
            strokeWidth="3.238"
            d="M157.25 127.5h17.5"
          ></path>
          <path
            fill="#fff"
            d="M73.95 138.013c5.806 0 10.513-4.707 10.513-10.513s-4.707-10.513-10.513-10.513s-10.513 4.707-10.513 10.513s4.707 10.513 10.513 10.513"
          ></path>
          <path
            fill="#F47421"
            d="M141.487 73.742c-4.077 7.062-1.657 16.093 5.405 20.17s16.093 1.658 20.17-5.405c4.078-7.062 1.658-16.093-5.404-20.17c-7.063-4.078-16.093-1.658-20.171 5.404"
          ></path>
          <path fill="#000" d="m112.625 153.264l-8.75 15.156z"></path>
          <path
            stroke="#F47421"
            strokeWidth="3.238"
            d="m112.625 153.264l-8.75 15.156"
          ></path>
          <path
            fill="#fff"
            d="M145.17 75.868c-2.903 5.028-1.18 11.458 3.848 14.361s11.458 1.18 14.361-3.848s1.18-11.458-3.848-14.361s-11.458-1.18-14.361 3.848"
          ></path>
          <path
            fill="#F47421"
            d="M167.062 166.493c-4.077-7.063-13.108-9.482-20.17-5.405c-7.063 4.078-9.482 13.108-5.405 20.171c4.078 7.062 13.108 9.482 20.171 5.404s9.482-13.108 5.404-20.17"
          ></path>
          <path fill="#000" d="m112.625 101.736l-8.75-15.156z"></path>
          <path
            stroke="#F47421"
            strokeWidth="3.238"
            d="m112.625 101.736l-8.75-15.156"
          ></path>
          <path
            fill="#fff"
            d="M163.379 168.619c-2.903-5.028-9.332-6.751-14.361-3.848c-5.028 2.903-6.751 9.333-3.848 14.361s9.333 6.751 14.361 3.848s6.751-9.332 3.848-14.361"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsUbuntuLight0">
            <path fill="#fff" d="M0 0h256v256H0z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  debian: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <g clipPath="url(#skillIconsDebianLight0)">
          <path
            fill="#F4F2ED"
            d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
          ></path>
          <g clipPath="url(#skillIconsDebianLight1)">
            <path
              fill="#D70751"
              d="M215 127.5c0 48.325-39.175 87.5-87.5 87.5S40 175.825 40 127.5S79.175 40 127.5 40S215 79.175 215 127.5"
            ></path>
            <path
              fill="#fff"
              d="M163.86 119.01c.119 3.182-.928 4.728-1.875 7.463l-1.703.846c-1.392 2.706.138 1.718-.859 3.868c-2.176 1.932-6.593 6.044-8.007 6.421c-1.034-.023.699-1.22.926-1.687c-2.91 1.996-2.336 2.997-6.786 4.213l-.129-.291c-10.97 5.163-26.211-5.067-26.011-19.022c-.116.885-.333.664-.575 1.02c-.567-7.179 3.316-14.39 9.864-17.339c6.405-3.169 13.913-1.87 18.498 2.409c-2.519-3.3-7.535-6.8-13.476-6.476c-5.823.095-11.271 3.795-13.089 7.813c-2.981 1.876-3.329 7.238-4.628 8.221c-1.75 12.854 3.289 18.405 11.814 24.938c1.338.904.377 1.042.556 1.73c-2.832-1.325-5.424-3.327-7.557-5.778c1.133 1.655 2.353 3.265 3.932 4.529c-2.672-.902-6.24-6.47-7.279-6.697c4.603 8.242 18.673 14.454 26.044 11.371c-3.411.127-7.743.07-11.572-1.346c-1.614-.828-3.799-2.542-3.408-2.862c10.057 3.755 20.443 2.842 29.143-4.131c2.216-1.725 4.634-4.658 5.333-4.698c-1.052 1.583.18.761-.628 2.159c2.202-3.558-.961-1.449 2.278-6.143l1.196 1.646c-.448-2.955 3.668-6.54 3.249-11.21c.944-1.428 1.052 1.538.051 4.823c1.39-3.644.368-4.23.723-7.238c.384 1.011.893 2.084 1.153 3.153c-.906-3.523.926-5.931 1.381-7.979c-.45-.197-1.397 1.557-1.616-2.602c.033-1.807.505-.947.685-1.392c-.353-.205-1.284-1.59-1.849-4.246c.407-.626 1.096 1.618 1.654 1.709c-.359-2.111-.977-3.722-1.003-5.343c-1.633-3.411-.578.456-1.901-1.465c-1.738-5.418 1.441-1.257 1.657-3.718c2.632 3.813 4.132 9.727 4.823 12.175c-.527-2.986-1.376-5.879-2.415-8.678c.802.339-1.29-6.141 1.041-1.85c-2.487-9.147-10.638-17.694-18.139-21.703c.915.839 2.073 1.892 1.66 2.058c-3.733-2.219-3.077-2.394-3.612-3.332c-3.035-1.237-3.238.102-5.247.003c-5.729-3.04-6.832-2.717-12.104-4.619l.239 1.122c-3.794-1.264-4.421.477-8.521.003c-.249-.194 1.315-.706 2.603-.892c-3.669.485-3.498-.724-7.088.133c.883-.62 1.821-1.032 2.764-1.559c-2.991.182-7.143 1.741-5.862.321c-4.879 2.179-13.547 5.236-18.41 9.796l-.153-1.022c-2.229 2.675-9.719 7.99-10.315 11.457l-.597.138c-1.157 1.964-1.91 4.188-2.829 6.207c-1.516 2.586-2.223.996-2.007 1.402c-2.983 6.047-4.467 11.128-5.746 15.298c.912 1.363.023 8.208.366 13.685c-1.496 27.057 18.989 53.325 41.381 59.388c3.282 1.176 8.161 1.134 12.313 1.25c-4.897-1.401-5.529-.742-10.302-2.405c-3.441-1.622-4.195-3.473-6.634-5.589l.965 1.705c-4.78-1.692-2.78-2.094-6.67-3.325l1.031-1.345c-1.55-.118-4.105-2.61-4.803-3.994l-1.697.067c-2.036-2.51-3.122-4.324-3.042-5.729l-.548.977c-.62-1.065-7.495-9.427-3.928-7.481c-.663-.603-1.544-.983-2.499-2.721l.726-.828c-1.713-2.209-3.158-5.039-3.048-5.982c.916 1.236 1.55 1.467 2.18 1.679c-4.334-10.752-4.578-.591-7.859-10.944l.693-.055c-.53-.805-.856-1.673-1.283-2.528l.303-3.009c-3.118-3.603-.871-15.337-.42-21.77c.31-2.616 2.604-5.401 4.346-9.77l-1.061-.182c2.03-3.54 11.592-14.222 16.023-13.674c2.145-2.695-.427-.01-.847-.688c4.713-4.876 6.195-3.445 9.376-4.323c3.428-2.035-2.944.795-1.319-.776c5.931-1.513 4.202-3.443 11.936-4.21c.817.463-1.892.716-2.572 1.318c4.939-2.418 15.632-1.866 22.58 1.34c8.057 3.769 17.114 14.901 17.472 25.375l.407.11c-.206 4.164.637 8.98-.826 13.403z"
            ></path>
          </g>
        </g>
        <defs>
          <clipPath id="skillIconsDebianLight0">
            <path fill="#fff" d="M0 0h256v256H0z"></path>
          </clipPath>
          <clipPath id="skillIconsDebianLight1">
            <path fill="#fff" d="M40 40h175v175H40z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  ),
  fedora: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#294172"
        d="M127.82 64.004C127.82 28.754 99.246.18 64 .18C28.766.18.203 28.73.18 63.957v49.39c.02 7.997 6.504 14.473 14.508 14.473h49.335c35.239-.015 63.797-28.578 63.797-63.816"
      ></path>
      <path
        fill="none"
        stroke="#3c6eb4"
        strokeWidth="14.003"
        d="M36.973 68.12H59.91v22.94c0 12.66-10.273 22.937-22.937 22.937c-12.66 0-22.934-10.277-22.934-22.937s10.274-22.938 22.934-22.938zm0 0"
      ></path>
      <path
        fill="none"
        stroke="#3c6eb4"
        strokeWidth="14.003"
        d="M82.738 68.164H59.801V45.231c0-12.66 10.277-22.938 22.937-22.938s22.938 10.274 22.938 22.938c0 12.66-10.278 22.933-22.938 22.933zm0 0"
      ></path>
      <path
        fill="#fff"
        d="M66.926 61.137v29.89c0 16.54-13.41 29.953-29.95 29.953c-2.511 0-4.296-.285-6.617-.89c-3.39-.887-6.156-3.664-6.16-6.895c0-3.906 2.836-6.746 7.074-6.746c2.016 0 2.747.387 5.704.387c8.718 0 15.793-7.063 15.808-15.785V77.312c0-1.23-1-2.23-2.234-2.226l-10.387-.004c-3.867 0-6.996-3.086-6.996-6.965c0-3.906 3.16-6.98 7.07-6.98"
      ></path>
      <path
        fill="#fff"
        d="M52.785 75.148V45.262c0-16.543 13.41-29.953 29.953-29.953c2.508 0 4.293.28 6.617.89c3.387.887 6.157 3.664 6.157 6.895c0 3.906-2.836 6.746-7.07 6.746c-2.02 0-2.75-.387-5.704-.387c-8.722 0-15.797 7.063-15.812 15.781v13.743a2.235 2.235 0 0 0 2.234 2.226l10.387.004c3.871 0 6.996 3.086 6.996 6.965c.004 3.906-3.16 6.98-7.07 6.98"
      ></path>
      <path
        fill="#3c6eb4"
        d="M116.809 116.773v-2.652l-1.211 2.781l-1.18-2.78v2.651h-.68v-4.187h.711l1.168 2.676l1.149-2.676h.722v4.187zm-4.954-3.484v3.484h-.71v-3.484h-1.192v-.703h3.09v.703"
      ></path>
    </svg>
  ),
  alphine: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#77c1d2"
        fillRule="evenodd"
        d="M98.444 35.562L126 62.997L98.444 90.432L70.889 62.997z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#2d3441"
        fillRule="evenodd"
        d="m29.556 35.562l57.126 56.876H31.571L2 62.997z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  macos: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 14.727h.941v-2.453c0-.484.318-.835.771-.835c.439 0 .71.276.71.722v2.566h.915V12.25c0-.48.31-.812.764-.812c.46 0 .718.28.718.77v2.518h.94v-2.748c0-.801-.517-1.334-1.307-1.334c-.578 0-1.054.31-1.247.805h-.023c-.147-.514-.552-.805-1.118-.805c-.545 0-.968.306-1.142.771H.903v-.695H0v4.006zm7.82-.646c-.408 0-.68-.208-.68-.537c0-.318.26-.522.714-.552l.926-.057v.307c0 .483-.427.839-.96.839m-.284.71c.514 0 1.017-.268 1.248-.703h.018v.639h.908v-2.76c0-.804-.647-1.33-1.64-1.33c-1.021 0-1.66.537-1.701 1.285h.873c.06-.332.344-.548.79-.548c.464 0 .748.242.748.662v.287l-1.058.06c-.976.061-1.524.488-1.524 1.199c0 .721.564 1.209 1.338 1.209m6.305-2.642c-.065-.843-.719-1.512-1.777-1.512c-1.164 0-1.92.805-1.92 2.087c0 1.3.756 2.082 1.928 2.082c1.005 0 1.697-.59 1.772-1.485h-.888c-.087.453-.397.725-.873.725c-.597 0-.982-.483-.982-1.322c0-.824.381-1.323.975-1.323c.502 0 .8.321.876.748zm2.906-2.967c-1.591 0-2.589 1.085-2.589 2.82s.998 2.816 2.59 2.816c1.586 0 2.584-1.081 2.584-2.816s-.997-2.82-2.585-2.82m0 .832c.971 0 1.591.77 1.591 1.988c0 1.213-.62 1.984-1.59 1.984c-.976 0-1.592-.77-1.592-1.984c0-1.217.616-1.988 1.591-1.988m2.982 3.178c.042 1.006.866 1.626 2.12 1.626c1.32 0 2.151-.65 2.151-1.686c0-.813-.469-1.27-1.576-1.523l-.627-.144c-.67-.158-.945-.37-.945-.733c0-.453.415-.756 1.032-.756c.623 0 1.05.306 1.096.817h.93c-.023-.96-.817-1.61-2.019-1.61c-1.187 0-2.03.653-2.03 1.62c0 .78.477 1.263 1.482 1.494l.707.166c.688.163.967.39.967.782c0 .454-.457.779-1.115.779c-.665 0-1.167-.329-1.228-.832z"
      ></path>
    </svg>
  ),
};
