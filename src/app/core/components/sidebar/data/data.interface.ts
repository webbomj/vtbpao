export interface ISidebarData {
  name: string;
  subname?: string;
  type: SidebarDataType;
  icon?: string;
  children?: IChildrenSidebar[];
  current?: boolean;
}

export interface IChildrenSidebar {
  name: string;
  type?: SidebarChildrenType;
  icon?: string;
  current?: boolean;
}

export enum SidebarDataType {
  expansion = 'expansion',
  static = 'static',
}

export enum SidebarChildrenType {
  header = 'header',
  child = 'child',
}
